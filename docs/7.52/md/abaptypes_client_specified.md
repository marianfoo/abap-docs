  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES - CLIENT SPECIFIED

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES dtype TYPE cds\_entity CLIENT SPECIFIED clnt.

Effect

The statement TYPES uses the addition CLIENT SPECIFIED to define a structured type constructed from all components of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity and that also has an initial component clnt with the type of a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry").

cds\_entity expects the name of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), namely:

-   The name of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as defined in the CDS DDL statement [DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)).
    
-   The name of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as defined in the CDS DDL statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)).
    

Any name for the client column that complies with the [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) can be specified for clnt.

Notes

-   A structure of a type defined using this statement can be used as a work area of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement for CDS entities in which automatic client handling is switched off using [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)).
    
-   The name specified for clnt has absolutely no dependency on the actual name of a client column in a data source of a CDS view.
    

Example

Defines a row type scarr\_spfli\_clnt for an internal table used as a target area when a client-specific CDS view is accessed using the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) of the SELECT statement. If the addition CLIENT SPECIFIED of the statement TYPES is not used, the column clnt would not exist in the table scarr\_spfli\_clnt and could not be used as a target range.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED
       INTO TABLE @scarr\_spfli\_clnt.