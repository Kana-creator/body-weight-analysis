package com.xak.bodyweightanalysis.user;

import java.util.List;
import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.NotAuthorisedException;
import com.xak.bodyweightanalysis.exception.NotFoundException;
import com.xak.bodyweightanalysis.exception.SuccessMessageException;

public interface UserService {

	void saveUser(User user) 
			throws SuccessMessageException,
			AlreadyExistsException, BlankFieldException;

	List<User> fetchUsers() throws NotFoundException;

	void deleteUser(Long userId, String role) 
			throws NotFoundException, NotAuthorisedException, SuccessMessageException;

	User userLogin(LoginModel loginModel) throws NotFoundException, SuccessMessageException;

	User adminLogin(LoginModel loginModel) throws NotFoundException, SuccessMessageException;

	User resetPassword(LoginModel loginModel) 
			throws NotFoundException, SuccessMessageException, BlankFieldException;

}
