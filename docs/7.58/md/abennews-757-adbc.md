  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.57](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20in%20ABAP%20Release%207.57%2C%20ABENNEWS-757-ADBC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC in ABAP Release 7.57

[1\. Generic Method EXECUTE](#!ABAP_MODIFICATION_1@1@)
[2\. Switching Result Sets](#!ABAP_MODIFICATION_2@2@)
[3\. New Method for Closing a Connection](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Generic Method EXECUTE

The new method EXECUTE of ADBC class CL\_SQL\_STATEMENT can be used to replace specific methods, see [ADBC - All Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_execute.htm).

Modification 2   

Switching Result Sets

The new method NEXT\_RESULT\_SET of ADBC class CL\_SQL\_RESULT\_SET can be used to access more than one result set, see example [ADBC - Multiple Result Sets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_multi_result_abexa.htm).

Modification 3   

New Method for Closing a Connection

The class [CL\_SQL\_CONNECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_sql_connection.htm) has a new method CLOSE\_NO\_DISCONNECT that closes an ADBC connection object and sets the database connection to inactive instead of closing it completely. Such a connection must not be reopened but can be reused.