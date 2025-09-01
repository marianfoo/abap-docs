---
title: "CLASS-METHODS, FOR DDL OBJECT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_shortref.htm) Syntax CLASS-METHODS meth FOR DDL OBJECT OPTIONS CDS CLIENT REQUIRED. Additions: 1. ... OPTIONS CDS CLIENT REQUIRED.(#!ABAP_ADDITION_1@1@) Effect Methods defined with FOR DDL
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_for_ddl_object.htm"
abapFile: "abapclass-methods_for_ddl_object.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abapclass", "methods", "for", "ddl", "object"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-METHODS%2C%20FOR%20DDL%20OBJECT%2C%20ABAPCLASS-METHODS_FOR_DDL_OBJECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

CLASS-METHODS, FOR DDL OBJECT

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth FOR DDL OBJECT
                   *\[*OPTIONS CDS CLIENT REQUIRED*\]*.

Additions:

[1\. ... OPTIONS CDS CLIENT REQUIRED.](#!ABAP_ADDITION_1@1@)

Effect

Methods defined with FOR DDL OBJECT are used to support [DDL objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_object_glosry.htm "Glossary Entry") with [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry"). For example, the following DDL objects can be used with AMDP:

-   [Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenview_glosry.htm "Glossary Entry")
-   [L](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenllang_glosry.htm "Glossary Entry") libraries
-   [Graph workspaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_workspace_glosry.htm "Glossary Entry")

Note: [Database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_table_glosry.htm "Glossary Entry") are not considered as DDL objects.

The methods have the following characteristics:

-   Must be defined and implemented in an [AMDP class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry").
-   Must be [static](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_method_glosry.htm "Glossary Entry"), i. e. only using CLASS-METHODS statements.
-   Can be public, protected or private.
-   Must not have any parameters and exceptions.
-   Must not be defined in interfaces.
-   Can be based on [DDIC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_glosry.htm "Glossary Entry") artifacts and are therefore be client-dependent. In this case, the addition using OPTIONS ... is required.
-   Cannot be called as methods in ABAP.
-   Cannot be [redefined](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenredefinition_glosry.htm "Glossary Entry").

The method implementation must be included for the respective DDL object following the syntax outlined in the topic [METHOD, BY DATABASE ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm).

Addition 1   

... OPTIONS CDS CLIENT REQUIRED.

Effect

Informs the caller of the method that another client is used. The methods using FOR DDL OBJECT can be based on [DDIC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_glosry.htm "Glossary Entry") artifacts and are therefore client-dependent. Currently, the addition is only required if a [graph workspace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_workspace_glosry.htm "Glossary Entry") is defined using client-dependent views.

Executable Example

The example [AMDP - Graph Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_graph_abexa.htm) demonstrates graph processing using a graph workspace and a graph procedure. In this context, a graph workspace is declared using the CLASS-METHODS statement with the addition FOR DDL OBJECT.