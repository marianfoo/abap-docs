---
title: "ABAP CDS - Time Functions"
description: |
  Syntax ... TIMS_IS_VALID(time) ... Variants: 1. ... TIMS_IS_VALID(time)(#!ABAP_VARIANT_1@1@) Effect In a CDS view(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm 'Glossary Entry'), these functions execute operations with arguments of the built-in data type
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_time_functions.htm"
abapFile: "abencds_f1_time_functions.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abencds", "time", "functions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Built-In Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_builtin_functions.htm) →  [ABAP CDS - Special Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_special_functions.htm) →  [ABAP CDS - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_functions.htm) → 

ABAP CDS - Time Functions

Syntax

... TIMS\_IS\_VALID(time) ...

Variants:

[1\. ... TIMS\_IS\_VALID(time)](#!ABAP_VARIANT_1@1@)

Effect

In a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), these functions execute operations with arguments of the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm). The functions have positional parameters to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm), [literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm), [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm), [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm), built-in functions, or expressions can all be specified as actual parameters. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except TIMS\_IS\_VALID returns a null value.

Note

It is not currently possible to access the current system time directly in a CDS view. Instead, a CDS view can be given an appropriate [input parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm). The special annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) makes it possible to pass the value of the [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uzeit to this parameter.

Variant 1

... TIMS\_IS\_VALID(time)

Effect

The function TIMS\_IS\_VALID determines whether time (if specified) contains a valid time in the format HHMMSS. The actual parameter must have the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Example

The following CDS view applies time functions in the SELECT list to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_TIME\_FUNCTIONS uses SELECT to access the view. The column TIMS1 of the database table can be given any values.

@AbapCatalog.sqlViewName: 'demo\_cds\_timfnc'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_time\_functions
as select from
demo\_expressions
{
id,
tims1 as time1,
tims\_is\_valid(tims1) as valid1
}