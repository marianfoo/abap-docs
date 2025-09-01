---
title: "Syntax"
description: |
  ... RETURNS  element1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list_element.htm); element2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list_element.htm); ...;  ... Effect Defines the elements of a CDS table function(https:/
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list.htm"
abapFile: "abencds_f1_return_list.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abencds", "return", "list"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_table_function.htm) → 

ABAP CDS - DEFINE TABLE FUNCTION, element\_list

Syntax

... RETURNS { [element1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list_element.htm); [element2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list_element.htm); ...; } ...

Effect

Defines the elements of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"). The elements are specified in a semicolon-separated list [element1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list_element.htm); [element2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list_element.htm); ...; in curly brackets { }. The final element must also be followed by a semicolon.

These elements have the following meaning:

-   They determine the components of the structured data types represented by a CDS table function with respect to ABAP.

-   This structured data type is the row type of the tabular return value result of the [AMDP function implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_methods.htm) amdp\_function specified after [IMPLEMENTED BY METHOD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_table_function.htm).

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).

In a [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm) CDS table function, the first element must be typed with the built-in dictionary type CLNT. This element is the client field of the CDS table function. It is a column of the tabular return value of the associated AMDP function implementation and is not a component of the structured data type represented by the table function.

Note

In a [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_func_client_handling.htm) CDS table function, the structured data type of the table function and the row type of the return value of the AMDP function implementation are not compatible. The AMDP function implementation [cannot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_methods.htm) be called as a regular function method in ABAP anyway, which means that no correspondingly structured target variable needs to be declared.

Example

The program DEMO\_AMDP\_FUNCTION\_TYPE uses [RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") to show the following for various CDS table functions:

-   The components of the structured data type

-   The parameters of the associated AMDP function implementation

-   The row type of the return value of the associated AMDP function implementation

For client-specific table functions, a client field is defined after RETURNS. This field is a column of the return value of the AMDP function implementation and is not part of the structured data type.

Continue
[ABAP CDS - DEFINE TABLE FUNCTION, element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_return_list_element.htm)