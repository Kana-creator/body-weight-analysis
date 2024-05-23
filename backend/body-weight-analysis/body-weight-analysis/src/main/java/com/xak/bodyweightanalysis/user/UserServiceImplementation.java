package com.xak.bodyweightanalysis.user;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.NotAuthorisedException;
import com.xak.bodyweightanalysis.exception.NotFoundException;
import com.xak.bodyweightanalysis.exception.SuccessMessageException;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImplementation implements UserService {
	
	@Autowired
	UserRepository userRepository;

	
	/*
	 * SAVING NEW USER
	 */
	@Override
	@Transactional
	public void saveUser(User user) 
			throws SuccessMessageException, 
			AlreadyExistsException, BlankFieldException  {
		
		
		// CHECK IF EMAIL ALREADY TAKEN
		Optional<User> duplicateUser = 
				userRepository.findByEmail(user.getEmail());
		
		if(duplicateUser.isPresent()) {
			throw new AlreadyExistsException("Email address '" + duplicateUser.get().getEmail() 
					+ "' already taken.");			
		}		
		
		//CHECK ID ADMIN USER ALREADY ADDED
		Optional<User> adminUser = userRepository.findByRole(user.getRole());
		if(adminUser.isPresent() && user.getRole().equals("admin")) {
			throw new AlreadyExistsException("Admin account already created");
		}		
		
		// SAVE USER IF ALL CONDITIONS ARE FULLFILLED 
		userRepository.save(user);		
		throw new SuccessMessageException("Sign up success.");		
		
	}
	

	
	/*
	 * FETCHING LIST OF USERS
	 */
	@Override
	@Transactional
	public List<User> fetchUsers() throws NotFoundException {
		// CHECK IF ANY USER EXISTS IN THE DATABASE
		
		List<User> users = userRepository.findAll();
		
		if(users.isEmpty()) {
			throw new NotFoundException("No user found");
		}
		
		return users;		
	}
	

	/*
	 * DELETING A USER
	 */
	@Override
	@Transactional
	public void deleteUser(Long userId, String role) 
			throws NotFoundException,NotAuthorisedException, SuccessMessageException {		
		
		//CHECK IF USER EXISTS IN THE DATABASE
		Optional<User> user = userRepository.findById(userId);
		if(user.isEmpty()) {
			throw new NotFoundException("User not found");
		}
		
		//CHECK IF USER IS AUTHORIED TO DELETE ANY USER
		if(!role.equals("admin")) {
			throw new NotAuthorisedException("You are not allowed to delete any user.");
		}
		
		userRepository.delete(user.get());
		throw new SuccessMessageException("User deleted successfully.");
		
	}



	@Override
	@Transactional
	public User userLogin(LoginModel loginModel) throws NotFoundException, SuccessMessageException {
		// CHECK IF THE USER EXISTS
		Optional<User> user = userRepository.findByEmail(loginModel.getEmail());
		if(user.isEmpty()) {
			throw new NotFoundException("Incorrect email or password");
		}
		
		//CHECK IF THE PASSWORD IS CORRECT
		if(!user.get().getPassword().equals(loginModel.getPassword())) {
			throw new NotFoundException("Incorrect email or password");
		}
		
		//LOGIN IF ALL CONDITIONS ARE FULLFILLED
		return user.get();	
		
	}



	@Override
	@Transactional
	public User adminLogin(LoginModel loginModel) throws NotFoundException, SuccessMessageException {
		// CHECK IF THE USER EXISTS
		Optional<User> user = userRepository.findByEmail(loginModel.getEmail());
		if(user.isEmpty()) {
			throw new NotFoundException("Incorrect email or password");
		}
		
		//CHECK IF THE PASSWORD IS CORRECT
		if(!user.get().getPassword().equals(loginModel.getPassword())) {
			throw new NotFoundException("Incorrect email or password");
		}		
		
		//CHECK IF THE USER IS ADMIN
		if(!user.get().getRole().equals("admin")) {
			throw new NotFoundException("Incorrect email or password");
		}
		
		//LOGIN IF ALL CONDITIONS ARE FULLFILLED
		return user.get();
		
		
	}


	/*
	 * RESET PASSWORD
	 */
	@Override
	@Transactional
	public User resetPassword(LoginModel loginModel) 
			throws NotFoundException, SuccessMessageException, BlankFieldException {
		//CHECK IF THE USER EXISTS
		Optional<User> user = userRepository.findByEmail(loginModel.getEmail());
		if(user.isEmpty()) {
			throw new NotFoundException("Wrong email!");
		}
		
		
		// CHECK FOR NULL REQUIRED FIELDS		
		if(Objects.isNull(loginModel.getEmail()) || "".equals(loginModel.getEmail())) {
			throw new BlankFieldException("Email is required.");
		}
		
		if(Objects.isNull(loginModel.getPassword()) || "".equals(loginModel.getPassword())) {
			throw new BlankFieldException("Password is required.");
		}
		
		
		// SET NEW VALUES IF REQUIRED FIELDS ARE PROVIDED
		user.get().setPassword(loginModel.getPassword());
		
		return userRepository.save(user.get());
		
		
	}	
	

}
