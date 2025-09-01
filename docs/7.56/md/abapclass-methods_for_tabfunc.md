---
title: "CLASS-METHODS, FOR TABLE FUNCTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_shortref.htm) Syntax CLASS-METHODS meth FOR TABLE FUNCTION cds_tabfunc. Effect This statement declares the static method(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_method_glos
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_for_tabfunc.htm"
abapFile: "abapclass-methods_for_tabfunc.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abapclass", "methods", "for", "tabfunc"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) →  [AMDP - Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_methods.htm) → 

CLASS-METHODS, FOR TABLE FUNCTION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth FOR TABLE FUNCTION cds\_tabfunc.

Effect

This statement declares the [static method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth as an [AMDP function implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") that implements a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") cds\_tabfunc as an [AMDP table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_table_function_glosry.htm "Glossary Entry"). This statement can only be specified in the [public](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpublic_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of an [AMDP class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_classes.htm) and not in an interface. The method must be implemented using the addition [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod_by_db_proc.htm) of the statement METHOD.

cds\_tabfunc expects a CDS table function defined using the statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_table_function.htm) in the [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry") [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry"). For this function, the current class and the method meth are specified after the addition IMPLEMENTED BY METHOD.

No other additions are possible. The interface parameters in the AMDP function implementation are added to the CDS table function as follows:

-   Mandatory input parameters of the AMDP function implementation are generated from the [input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_func_parameter_list.htm) of the CDS table function. The names are copied, and the ABAP types are derived from the dictionary types.
-   A return value of the type of a standard table with an empty table key with the name result with a structured row type is generated from the [elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list.htm) of the CDS table function. The names of the components of the row type correspond to the names of the elements and the data types are derived from their dictionary types.

Executable Example

[AMDP functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_functions_abexa.htm)