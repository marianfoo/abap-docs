---
title: "CDS FDL - DEFINE SCALAR FUNCTION"
description: |
  Syntax DEFINE SCALAR FUNCTION ScalarFunction WITH PARAMETERS pname1 : typing(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm) , pname2 : typing(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm), ..
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm"
abapFile: "abencds_define_scalar_function.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencds", "define", "scalar", "function"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm) →  [ABAP CDS - SQL-Based Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20FDL%20-%20DEFINE%20SCALAR%20FUNCTION%2C%20ABENCDS_DEFINE_SCALAR_FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CDS FDL - DEFINE SCALAR FUNCTION

Syntax

DEFINE SCALAR FUNCTION ScalarFunction
  *\[*WITH PARAMETERS pname1 : [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm) *\[*,
                   pname2 : [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm)*\]**\[*,
                  ...*\]**\]*
          RETURNS [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm)*\[*;*\]*

Effect

Defines a CDS scalar function definition ScalarFunction as a [CDS scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") in the [CDS FDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl_glosry.htm "Glossary Entry"). The name ScalarFunction must follow the naming conventions for [dictionary types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm). The following additional rules apply:

-   The name can be up to 26 characters long. Four characters are reserved for the suffix of the [scalar function implementation reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_func_impl_ref.htm).
-   The name must not start with the prefix QCM.
-   The first, second, third, and last character of the name must not be an underscore (\_).
-   A CDS scalar function is located in the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

Optionally, a list of input parameters pname1, pname2, ... can be declared using the addition WITH PARAMETERS. These also define the input parameters of the AMDP scalar function. There is no limit to the number of input parameters. The typing of these input parameters is explained in the topic [CDS FDL - typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm).

The name of an input parameter must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm). Furthermore, it cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. All reserved names that cannot be used are specified in the DDIC database table TRESE. The evaluation of names is not case-sensitive. Each parameter name must be unique. Blanks in the comma-separated parameter list are ignored and can be omitted.

RETURNS defines the data type of the scalar return value. The topic [CDS FDL - typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm) explains how the return value can be typed.

Use

CDS scalar functions are available in [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in operand positions that expect scalar values, similar to built-in functions. In particular, they can be specified in the following operand positions:

-   As the right-hand side of a join ON-condition of a CDS view entity as documented in the topic [CDS DDL - CDS View Entity, SELECT, JOIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v2.htm).
-   As an element in the element list of a CDS view entity, as documented in the topic [CDS DDL - CDS View Entity, SELECT, element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v2.htm).
-   As operands in a [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_clause_v2.htm) condition of a CDS view entity.
-   As operands of an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm) in a CDS view entity.
-   As operand of a [case distinction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm) in a CDS view entity.
-   As operand of a [cast expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm) in a CDS view entity.
-   As operands of [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm) wherever documented.
-   As an operand of a [filter condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_filter_v2.htm) of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpath_expression_glosry.htm "Glossary Entry").

Restrictions

-   SQL-based scalar functions cannot be used in CDS entities other than CDS view entities.
-   SQL-based scalar functions can currently not be used in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry").

Once a CDS scalar function has been activated, a [scalar function implementation reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_func_impl_ref.htm) must be created. This scalar function implementation reference binds the scalar function to a runtime environment and refers to an [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry").

The scalar function is implemented in an AMDP function using the addition [FOR SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_for_scalfunc.htm).

Hint

After activation, a CDS scalar function cannot be renamed.

Example

The following example demonstrates the definition, implementation, and use of an SQL-based scalar function.

CDS scalar function definition

The following CDS scalar function DEMO\_CDS\_SCALAR\_HELLOWORLD has no input parameters. It only defines the data type of the return parameter.

define scalar function DEMO\_CDS\_SCALAR\_HELLOWORLD
  returns abap.char(12)

CDS scalar function implementation reference

The scalar function implementation reference DEMO\_CDS\_SCALAR\_HELLOWORLD\_SQL binds the scalar function to the SQL Engine and defines the method EXECUTE of the class CL\_DEMO\_CDS\_SCALAR\_HELLOWORLD as AMDP function implementation.

AMDP function implementation

The following listing shows the AMDP function implementation. The value of the return parameter is set to Hello World!.

METHOD execute BY DATABASE FUNCTION
               FOR HDB
               LANGUAGE SQLSCRIPT
               OPTIONS READ-ONLY.
  result = 'Hello World!';
ENDMETHOD.

Use in a CDS view entity

The following CDS view entity uses the scalar function DEMO\_CDS\_SCALAR\_HELLOWORLD as an element in the SELECT list.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, scalar func'
define view entity DEMO\_CDS\_SCALAR\_USE
  as select from demo\_expressions
{
  key id                           as Id,
      DEMO\_CDS\_SCALAR\_HELLOWORLD() as MyScalarFunc
}

Continue
[CDS FDL - typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm)