  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_data_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20CLIENT%20SPECIFIED%2C%20ABAPTYPES_CLIENT_SPECIFIED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, CLIENT SPECIFIED

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm)

Obsolete Syntax

TYPES dtype TYPE cds\_entity CLIENT SPECIFIED clnt.

Effect

With the addition CLIENT SPECIFIED the statement TYPES defines a structured type constructed from all components of a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity and an additional first component clnt with the type of a [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry").

cds\_entity expects the name of a non-abstract [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), namely:

-   [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry")
-   [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry")
-   The name of a [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry")
-   The name of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

as defined in the corresponding [DEFINE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) statement of the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry").

Any name for the client column that follows the [naming conventions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_conventions.htm) can be specified for clnt.

Hints

-   A structure of a type defined using this statement can be used as a work area of a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement for CDS entities in which [implicit client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm) is disabled using the obsolete statement [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_client_handling.htm). Since the implicit client handling should not be disabled but clients should be switched with the addition [USING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm), the addition CLIENT SPECIFIED is also obsolete for TYPES.
-   If the statement is used for a [client-dependent CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_func_client_handling.htm), a structured type is produced that matches the line structure of the return value of the associated [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_methods.htm). This type is not, however, required in ABAP programs, since the AMDP function implementation cannot be called like a regular function method
-   The name specified for clnt is completely independent of the actual name of a client column in a data source of a CDS view.
-   Abstract [CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") entities cannot be specified.

Example

Defines a line type scarr\_spfli\_clnt for an internal table that is used as a target area when a client-dependent CDS view is accessed using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm) of the SELECT statement. If the addition CLIENT SPECIFIED of the statement TYPES is not used, the column clnt would not exist in the table scarr\_spfli\_clnt and could not be used as a target range.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED
       INTO TABLE @scarr\_spfli\_clnt.

The following example shows how the recommended addition [USING ALL CLIENTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) is used, for which no special target area is required.

DATA scarr\_spfli TYPE TABLE OF demo\_cds\_scarr\_spfli WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli USING ALL CLIENTS
       INTO TABLE @scarr\_spfli.