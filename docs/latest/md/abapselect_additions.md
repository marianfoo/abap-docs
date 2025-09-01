  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20abap_options%2C%20ABAPSELECT_ADDITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, abap\_options

Syntax

... [*\[*PRIVILEGED ACCESS*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_privileged_access.htm)
    [*\[*UP TO n ROWS*\]* *\[*OFFSET o*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm)
    [*\[*BYPASSING BUFFER*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_bypassing_buffer.htm)
    [*\[*CONNECTION con*|*(con\_syntax)*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_connection.htm) ...

Effect

These additions to SELECT or [OPEN CURSOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_cursor.htm) are ABAP-specific.

-   [PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_privileged_access.htm) disables [CDS access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry").
-   [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm) restrict the result set.
-   [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_bypassing_buffer.htm) bypasses [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry").
-   [CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_connection.htm) specifies a [database connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_connection_glosry.htm "Glossary Entry").

If [PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_privileged_access.htm) is used, it must be placed in front of the other options.

If the [INTO clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) is specified as last clause of a SELECT statement (recommended and enforced in [strict mode from ABAP release 7.50](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_750.htm)), these additions must be placed after the INTO clause. Otherwise, they can also be placed after the [SELECT clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm) or after the [FROM clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm).

Continue
[SELECT, PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_privileged_access.htm)
[SELECT, UP TO, OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm)
[SELECT, BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_bypassing_buffer.htm)
[SELECT, CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_connection.htm)