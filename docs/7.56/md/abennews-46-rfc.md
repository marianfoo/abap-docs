  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Remote Function Call in Release 4.6A

[1\. RFC Debugging](#!ABAP_MODIFICATION_1@1@)
[2\. Main Session](#!ABAP_MODIFICATION_2@2@)

Modification 1   

RFC Debugging
ABAP Debugger enables breakpoints to be set on the statements RFC or CALL FUNCTION DESTINATION. This positions breakpoints in the current program for all types of RFC.

Modification 2   

Main Session
Main sessions could not be created, for example using the /O command in the OK code field, for synchronous RFC until Release 4.6. This function, previously only provided for asynchronous RFC, is now available from this release.