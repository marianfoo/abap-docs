---
title: "TYPES - CLIENT SPECIFIED"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_shortref.htm) Syntax TYPES dtype TYPE cds_entity CLIENT SPECIFIED clnt. Effect The statement TYPES uses the addition CLIENT SPECIFIED to define a structured type constructed from all components of a CDS entity(
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_client_specified.htm"
abapFile: "abaptypes_client_specified.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "abaptypes", "client", "specified"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm) → 

TYPES - CLIENT SPECIFIED

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype TYPE cds\_entity CLIENT SPECIFIED clnt.

Effect

The statement TYPES uses the addition CLIENT SPECIFIED to define a structured type constructed from all components of a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity and that also has an initial component clnt with the type of a [client column](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_column_glosry.htm "Glossary Entry").

cds\_entity expects the name of a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"), namely:

-   The name of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") as defined in the CDS DDL statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm).
    
-   The name of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") as defined in the CDS DDL statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_table_function.htm).
    

Any name for the client column that complies with the [naming conventions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennaming_conventions.htm) can be specified for clnt.

Notes

-   A structure of a type defined using this statement can be used as a work area of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement for CDS entities in which automatic client handling is switched off using [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm).
    
-   The name specified for clnt has absolutely no dependency on the actual name of a client column in a data source of a CDS view.
    

Example

Defines a row type scarr\_spfli\_clnt for an internal table used as a target area when a client-specific CDS view is accessed using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) of the SELECT statement. If the addition CLIENT SPECIFIED of the statement TYPES is not used, the column clnt would not exist in the table scarr\_spfli\_clnt and could not be used as a target range.

TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt.
DATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY.
SELECT \*
       FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED
       INTO TABLE @scarr\_spfli\_clnt.