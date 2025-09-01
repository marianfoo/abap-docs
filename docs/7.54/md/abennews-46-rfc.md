  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Remote Function Call as of Release 4.6A

Modification 1

RFC Debugging
In the ABAP Debugger it is possible to set breakpoints on the
statments RFC or CALL FUNCTION DESTINATION.Thus breakpoints are positioned in the current program at all types of RFCs.

Modification 2

Main Session
The creation of main sessions, for example via the /O command in the OK code field was not possible for synchronous RFCs until the 46 Release. From this Release, this functionality, which was previously only available for asynchronous RFCs, was provided.