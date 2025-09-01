  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Native SQL in Release 7.53

[1\. New method GET\_ABAP\_CONNECTION in CL\_SQL\_CONNECTION](#!ABAP_MODIFICATION_1@1@)

Modification 1

New Method GET\_ABAP\_CONNECTION in CL\_SQL\_CONNECTION

The new method [GET\_ABAP\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) of the class CL\_SQL\_CONNECTION works in the same way as the existing method [GET\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) if the latter is passed the value abap\_true SHARABLE for a connection shared in ABAP SQL, Native SQL, and AMDP. GET\_ABAP\_CONNECTION can generally be used instead of GET\_CONNECTION, unless it needs to be called with the value abap\_false (default) for the parameter SHARABLE to create an exclusive connection.