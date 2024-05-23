package com.xak.bodyweightanalysis.user;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.NotAuthorisedException;
import com.xak.bodyweightanalysis.exception.NotFoundException;
import com.xak.bodyweightanalysis.exception.SuccessMessageException;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	/*
	 * SAVING A NEW USER
	 */
	@PostMapping("/api/save-user")
	public void saveUser(@RequestBody User user) 
			throws SuccessMessageException, AlreadyExistsException, 
			BlankFieldException  {
		userService.saveUser(user);	
		
	}
	
	
	/*
	 * FETCHING USERS LIST
	 */
	@GetMapping("/api/fetch-users")
	public List<User> fetchUsers() throws NotFoundException {
		return userService.fetchUsers();
	}
	
	
	/*
	 * DELETING A USER
	 */	
	@DeleteMapping("/api/delete-user/{userId}/{user_role}")
	public void deleteUser(@PathVariable("userId") Long userId, 
			@PathVariable("user_role") String role) 
					throws NotFoundException, NotAuthorisedException, SuccessMessageException {
		userService.deleteUser(userId, role);
	}
	
	
	/*
	 * USER LOGIN
	 */
	@PostMapping("/api/user-login")
	public User userLogin(@RequestBody LoginModel loginModel) 
			throws NotFoundException, SuccessMessageException {
		
		return userService.userLogin(loginModel);
		
	}
	
	
	
	/*
	 * ADMIN LOGIN
	 */
	@PostMapping("/api/admin-login")
	public User adminLogin(@RequestBody LoginModel loginModel) 
			throws NotFoundException, SuccessMessageException {
		
		return userService.adminLogin(loginModel);		
	}
	
	

	/*
	 * PASSWORD RESET
	 */
	@PutMapping("/api/reset-password")
	public User resetPassword(@RequestBody LoginModel loginModel) 
			throws NotFoundException, SuccessMessageException, BlankFieldException {
		return userService.resetPassword(loginModel);
	}

}
