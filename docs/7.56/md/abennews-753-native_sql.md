  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Native SQL in Release 7.53

Modification

New Method GET\_ABAP\_CONNECTION in CL\_SQL\_CONNECTION

The new method [GET\_ABAP\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) of the class CL\_SQL\_CONNECTION works in the same way as the existing method [GET\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) if the latter is passed the value abap\_true SHARABLE for a connection shared in ABAP SQL, Native SQL, and AMDP. GET\_ABAP\_CONNECTION can generally be used instead of GET\_CONNECTION, unless it needs to be called with the value abap\_false (default) for the parameter SHARABLE to create an exclusive connection.