  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Native%20SQL%20in%20ABAP%20Release%207.53%2C%20ABENNEWS-753-NATIVE_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Native SQL in ABAP Release 7.53

Modification

New Method GET\_ABAP\_CONNECTION in CL\_SQL\_CONNECTION

The new method [GET\_ABAP\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) of the class CL\_SQL\_CONNECTION works in the same way as the existing method [GET\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) if the latter is passed the value abap\_true SHARABLE for a connection shared in ABAP SQL, Native SQL, and AMDP. GET\_ABAP\_CONNECTION can generally be used instead of GET\_CONNECTION, unless it needs to be called with the value abap\_false (default) for the parameter SHARABLE to create an exclusive connection.