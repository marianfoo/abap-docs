---
title: "TYPES, CLIENT SPECIFIED"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_shortref.htm) Obsolete Syntax TYPES dtype TYPE cds_entity CLIENT SPECIFIED clnt. Effect With the addition CLIENT SPECIFIED the statement TYPES defines a structured type constructed from all components of a CDS e
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_client_specified.htm"
abapFile: "abaptypes_client_specified.htm"
keywords: ["select", "do", "if", "try", "method", "data", "types", "internal-table", "abaptypes", "client", "specified"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_data_obsolete.htm) → 

TYPES, CLIENT SPECIFIED

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_shortref.htm)

Obsolete Syntax

TYPES dtype TYPE cds\_entity CLIENT SPECIFIED clnt.

Effect

With the addition CLIENT SPECIFIED the statement TYPES defines a structured type constructed from all components of a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity and an additional first component clnt with the type of a [client column](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_column_glosry.htm "Glossary Entry").

cds\_entity expects the name of a non-abstract [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"), namely:

-   The name of a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry")
-   The name of a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry")
-   The name of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

as defined in the corresponding [DEFINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) statement of the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry").

Any name for the client column that follows the [naming conventions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennaming_conventions.htm) can be specified for clnt.

Hints

-   A structure of a type defined using this statement can be used as a work area of a [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement for CDS entities in which [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) is disabled using the obsolete statement [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm). [USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) is used to switch implicit client handling and not disable it, which means the addition CLIENT SPECIFIED is also obsolete for TYPES.
-   If the statement is used for a [client-dependent CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_handling.htm), a structured type is produced that matches the line structure of the return value of the associated [AMDP function implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_function_methods.htm). This type is not, however, required in ABAP programs, since the AMDP function implementation cannot be called like a regular function method
-   The name specified for clnt is completely independent of the actual name of a client column in a data source of a CDS view.
-   Abstract [CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") entities cannot be specified.

Example

Defines a line type scarr\_spfli\_clnt for an internal table that is used as a target area when a client-dependent CDS view is accessed using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client_obsolete.htm) of the SELECT statement. If the addition CLIENT SPECIFIED of the statement TYPES is not used, the column clnt would not exist in the table scarr\_spfli\_clnt and could not be used as a target range.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED
       INTO TABLE @scarr\_spfli\_clnt.

The following example shows how the recommended addition [USING ALL CLIENTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) is used, for which no special target area is required.

DATA scarr\_spfli TYPE TABLE OF demo\_cds\_scarr\_spfli WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli USING ALL CLIENTS
       INTO TABLE @scarr\_spfli.