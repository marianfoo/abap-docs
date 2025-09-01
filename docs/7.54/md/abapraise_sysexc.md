  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

RAISE SYSTEM-EXCEPTIONS

This statement is for internal use only.
It must not be used in application programs.

Syntax

RAISE SYSTEM-EXCEPTIONS *{* RMC\_COMMUNICATION\_FAILURE
                        *|* RMC\_INVALID\_STATUS
                        *|* RMC\_SYSTEM\_FAILURE *}*

Effect

The given runtime error is raised.

Note

Currently, only the following runtime errors are raised:

-   RMC\_COMMUNICATION\_FAILURE
    
-   RMC\_INVALID\_STATUS
    
-   RMC\_SYSTEM\_FAILURE
    

Moreover, this is only allowed within methods and only in system programs.