# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Function Definitions / ABAP CDS - FDL for Function Definitions / ABAP CDS - Scalar Functions / ABAP CDS - SQL-Based Scalar Functions

Included pages: 6


### abencds_sql_scalar_function.htm

---
title: "ABAP CDS - SQL-Based Scalar Functions"
description: |
  SQL-based scalar functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm 'Glossary Entry') are scalar functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm 'Glossary Entry') that are evaluated
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm"
abapFile: "abencds_sql_scalar_function.htm"
keywords: ["do", "while", "if", "try", "method", "class", "data", "types", "abencds", "sql", "scalar", "function"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20SQL-Based%20Scalar%20Functions%2C%20ABENCDS_SQL_SCALAR_FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

ABAP CDS - SQL-Based Scalar Functions

[SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") are [scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") that are evaluated by an SQL environment. They can be used in [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in operand positions that expect scalar values, similar to [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm).

While [analytical scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ana_scalar_function.htm) are defined and implemented by SAP, SQL-based scalar functions can also be defined and implemented by customers and partners. SQL-based scalar functions make user-defined [AMDP scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") known to the ABAP Dictionary and available in ABAP CDS.

An SQL-based scalar function consists of three development objects:

-   A [scalar function definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dsfd_glosry.htm "Glossary Entry") defined using [DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm) in a [CDS function definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_function_definition_glosry.htm "Glossary Entry"). It is located in the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.
-   A [scalar function implementation reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_func_impl_ref.htm) that binds the scalar function to the SQL environment and to an [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry"). The scalar function implementation reference is defined in a form-based editor in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). It must refer to an existing CDS scalar function. It is a standalone repository object that is transported and has its own editor in ADT.
-   An [AMDP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry") that implements the CDS scalar function using [SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_glosry.htm "Glossary Entry") in a special [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry"). The implementation is managed as an [AMDP scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") by the [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") in the database system. The AMDP method must be declared as a special [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_methods.htm) for exactly one CDS scalar function using the addition [FOR SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_for_scalfunc.htm). The parameter interface of the AMDP scalar function is defined by the input parameters and the scalar result type of the CDS scalar function.

[Client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") has not yet been implemented for CDS scalar functions, so only [client-independent](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_independent_glosry.htm "Glossary Entry") scalar functions are supported. The AMDP method that implements a scalar function can only access client-independent objects. However, when it is used, client dependency is ignored. A CDS scalar function can be used in both client-dependent and client-independent CDS entities.

The following topics describe the syntax for defining SQL-based scalar functions.

Continue
[CDS FDL - DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm)


### abencds_define_scalar_function.htm

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


### abencds_scalar_typing.htm

---
title: "CDS FDL - typing"
description: |
  Syntax dtype(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm)                       WITH REFERENCE TYPE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)  simple_type(https://help.sap.com/doc/abapdocu
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm"
abapFile: "abencds_scalar_typing.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abencds", "scalar", "typing"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm) →  [ABAP CDS - SQL-Based Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm) →  [CDS FDL - DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20FDL%20-%20typing%2C%20ABENCDS_SCALAR_TYPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS FDL - typing

Syntax

  [dtype](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm)                       *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*
*|* [simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm)                 *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*
*|* [data\_element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm)                *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*
*|* [generic\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_generic_types.htm)                *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*
*|* TYPE OF ParameterReference  *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*

Addition:

[... WITH REFERENCE TYPE](#!ABAP_ONE_ADD@1@)

Effect

The input parameters of [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") can be typed as follows:

-   Using a [built-in ABAP Dictionary data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm).
-   Using a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") defined using [DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm).
-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry").
-   Using the [generic data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_generic_types.htm) numeric.
    
    Note: The generic type any is only available for analytical scalar functions.
    
-   Referencing another input parameter using the syntax statement TYPE OF ParameterReference. ParameterReference can be any input parameter from the parameter list of the current scalar function that is typed with a built-in data type, a simple type, a data element, or a generic type.
    
    Note: You cannot reference the return parameter.
    
    Note: You cannot reference an input parameter that itself references an input parameter.
    

The return parameter of an SQL-based scalar function can be typed as follows:

-   Using a [built-in ABAP Dictionary data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm).
-   Using a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") defined using [DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm).
-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry").
-   Referencing another input parameter using the syntax statement TYPE OF ParameterReference. ParameterReference can be any of the input parameters from the parameter list of the current scalar function that is typed with a built-in data type, a simple type, a data element, or a generic type.
    
    Note: You cannot reference an input parameter that itself references an input parameter.
    

Example

The following example demonstrates the definition, implementation, and use of an SQL-based scalar function with input parameters.

CDS scalar function definition

The following CDS scalar function DEMO\_CDS\_SCALAR\_RATIO defines two input parameters:

-   portion: Typed with the generic type numeric. Accepts all available reference types.
-   total: Typed with reference to the input parameter portion.

The return parameter is typed with a built-in data type.

define scalar function DEMO\_CDS\_SCALAR\_RATIO
  with parameters
    portion: numeric
      with reference type \[ #CUKY, #UNIT, #CALC, #NONE \],
    total  : type of portion
      with reference type of portion
  returns abap.decfloat34
    with reference type #NONE;

CDS scalar function implementation reference

The scalar function implementation reference DEMO\_CDS\_SCALAR\_RATIO\_SQL binds the scalar function to the SQL Engine and defines the method EXECUTE of the class CL\_DEMO\_CDS\_SCALAR\_RATIO as AMDP function implementation.

AMDP function implementation

The following listing shows the AMDP function implementation. The input parameter portion is divided by the input parameter total and multiplied by 100 to get the percentage of portion in relation to total.

METHOD execute BY DATABASE FUNCTION
               FOR HDB
               LANGUAGE SQLSCRIPT
               OPTIONS READ-ONLY.
  result = portion / total \* 100;
ENDMETHOD.

Use in a CDS view entity

The following CDS view entity uses the scalar function DEMO\_CDS\_SCALAR\_RATIO as an element in the SELECT list to calculate the occupancy of a flight.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, scalar func'
define view entity DEMO\_CDS\_SCALAR\_USE\_RATIO
  as select from sflight
{
  key carrid                  as Carrid,
  key connid                  as Connid,
  key fldate                  as Fldate,
      seatsocc                as BookedSeats,
      seatsmax                as TotalSeats,
      DEMO\_CDS\_SCALAR\_RATIO(  
        portion => seatsocc,  
        total   => seatsmax ) as OccupationRatio
}

Access Using ABAP SQL

The following code snippet demonstrates how the CDS view entity can be accessed. The value of the column OccupationRatio is calculated by the AMDP function implementation.

SELECT \*
  FROM demo\_cds\_scalar\_use\_ratio
  INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Addition   

... WITH REFERENCE TYPE

Effect

Specifies a reference type. Reference types allow the handling of [CDS amount fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and [CDS quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_glosry.htm "Glossary Entry"). The addition is described in topic [CDS FDL - WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm).

Continue
[CDS FDL - WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)


### abencds_with_reference_type.htm

---
title: "CDS FDL - WITH REFERENCE TYPE"
description: |
  Syntax Forms Static Reference Type Specification WITH REFERENCE TYPE #CUKY  #UNIT  #CALC  #NONE  WITH REFERENCE TYPE OF pname Dynamic Reference Type Specification WITH REFERENCE TYPE CASE WHEN pname1: reference AND pname2: referenceAND... THEN reference WHEN ...
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm"
abapFile: "abencds_with_reference_type.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencds", "with", "reference", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm) →  [ABAP CDS - SQL-Based Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm) →  [CDS FDL - DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm) →  [CDS FDL - typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20FDL%20-%20WITH%20REFERENCE%20TYPE%2C%20ABENCDS_WITH_REFERENCE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS FDL - WITH REFERENCE TYPE

Syntax Forms

Static Reference Type Specification

  WITH REFERENCE TYPE \[#CUKY *|* #UNIT *|* #CALC *|* #NONE\]
*|* WITH REFERENCE TYPE OF pname

Dynamic Reference Type Specification

WITH REFERENCE TYPE
  CASE
    WHEN pname1: reference *\[*AND pname2: reference*\]**\[*AND...*\]*
      THEN reference
    *\[*WHEN ... *\[*AND ... *\]* THEN ...*\]*
    *\[*ELSE reference*\]*
  END*\[*;*\]*

Variants:

[1\. WITH REFERENCE TYPE ref\_type *|* OF ...](#!ABAP_VARIANT_1@1@)
[2\. WITH REFERENCE TYPE CASE ...](#!ABAP_VARIANT_2@2@)

Effect

[SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") support the handling of [CDS amount fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and [CDS quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_glosry.htm "Glossary Entry"). CDS amount fields and CDS quantity fields are fields with a reference to a [currency key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencurrency_key_glosry.htm "Glossary Entry"), a [unit key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunit_glosry.htm "Glossary Entry"), or a [calculated unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calculated_unit_glosry.htm "Glossary Entry"). Scalar functions can handle these references. They can define which reference types are allowed for each [input parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_parameter_glosry.htm "Glossary Entry") and for the return parameter. The [actual parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenactual_parameter_glosry.htm "Glossary Entry") passed to the input parameters must provide the required reference types. If the return parameter requires a reference type, the required annotation must be provided when the scalar function is used. Missing reference types for actual parameters or the return parameter result in a syntax check error.

The following general rules apply:

-   If the data type of a parameter is specified as abap.curr, then the reference type must be #CUKY.
-   If the type of a parameter is specified as abap.quan, then the reference type must be #UNIT.

In all other cases, the syntax checker does not check whether the data type and the reference type match and the developer must ensure logical combinations. The following definition is not logical and no actual parameter can satisfy the conditions. In other words, if a value has data type CHAR, it must not have a reference to a currency key and vice versa. The required data type and the required reference type are mutually exclusive. However, no syntax check error occurs.

p1: abap.char(10)
WITH REFERENCE TYPE \[ #CUKY \]

Example

The following example demonstrates the definition, implementation, and use of an SQL-based scalar function with parameters with reference types.

CDS scalar function definition

The following CDS scalar function DEMO\_CDS\_SCALAR\_REF\_CASE defines input parameters with reference types. The return parameter dynamically specifies the reference type.

define scalar function DEMO\_CDS\_SCALAR\_REF\_CASE
  with parameters
    p1: numeric
      with reference type \[ #CUKY, #UNIT, #CALC, #NONE \],
    p2: numeric
      with reference type \[ #CUKY, #UNIT, #CALC, #NONE \],
    p3: abap.dec(4,2)
      with reference type \[ #CUKY, #UNIT, #CALC, #NONE \]
  returns abap.dec(4,2)
    with reference type
      case
        when p2: reference type of p1
          then #NONE
        else reference type of p1
      end;

CDS scalar function implementation reference

The scalar function implementation reference DEMO\_CDS\_SCALAR\_REF\_CASE\_SQL binds the scalar function to the SQL Engine and defines the method EXECUTE of the class CL\_DEMO\_CDS\_SCALAR\_REF\_CASE as AMDP function implementation.

AMDP function implementation

The following listing shows the AMDP function implementation. The input parameters are summed up.

METHOD execute BY DATABASE FUNCTION
               FOR HDB
               LANGUAGE SQLSCRIPT
               OPTIONS READ-ONLY.
  result = p1 + p2 + p3;
  ENDMETHOD.

Use in a CDS view entity

The following CDS view entity uses the scalar function DEMO\_CDS\_SCALAR\_REF\_CASE as an element in the SELECT list. The passed actual parameter for p1 has a unit key as reference and the result is also linked with a unit key using the annotation @Semantics.quantity.unitOfMeasure.

Note: The syntax checker checks the reference types of the input parameters and of the return parameter. Wrong reference types lead to a syntax check error.

Note: The AMDP function implementation does not check the reference types. It would be technically possible to add 5 kilometers and 3 kilograms. The result might not make sense, but there would be no syntax check error. The developer must ensure logical calculations.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, scalar func'
define view entity DEMO\_CDS\_SCALAR\_USE\_REF\_CASE
  with parameters
    p1 : abap.dec(4,2)
  as select from DEMO\_CDS\_SCALAR\_HELPER
{
  key Id,
      Unit2,
      @Semantics.quantity.unitOfMeasure: 'Unit2'
      DEMO\_CDS\_SCALAR\_REF\_CASE(
      p1 => Int4,
      p2 => abap.int4'22',
      p3 => $parameters.p1) as ScalarResult
}

Variant 1   

WITH REFERENCE TYPE ref\_type *|* OF ...

Effect

The reference type can be specified statically. The following options are available:

-   Specifying a reference type ref\_type. The following values can be specified for ref\_type:
    -   #CUKY: The actual parameters passed must be [CDS amount fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field_glosry.htm "Glossary Entry"). They must have a valid data type and they must be annotated with [Semantics.amount.currencyCode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm).
    -   #UNIT: The actual parameters passed must be [CDS quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_glosry.htm "Glossary Entry"). They must have a valid data type and they must be annotated with [Semantics.quantity.unitOfMeasure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm).
    -   #CALC: The passed actual parameters must be [CDS calculated quantities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"). This means that they must be the result of a calculation, they have data type DECFLOAT34, and they must have a calculated unit reference using the annotation [Semantics.quantity.unitOfMeasure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm).
    -   #NONE: The actual parameters passed must not have a reference to a currency key, a unit of measure key, or a calculated unit.
-   WITH REFERENCE TYPE OF pname: Defines a reference type with reference to another input parameter. A parameter typed with reference to another input parameter automatically inherits the reference type of the referenced parameter. This is useful when two parameters require the same reference type. The following rules apply:
    -   The referenced parameter pname must be another input parameter. References to the return parameter are not supported.
    -   pname must be a parameter that is specified statically with a reference value. Referencing parameters with a dynamic specification or with a parameter reference is not allowed.

An input parameter can have one or more reference types. The reference types can be freely combined. Here's an example:

WITH REFERENCE TYPE \[#CUKY, #CALC, #NONE, REFERENCE TYPE OF pname1\]

This means that the parameter in question supports all of the specified reference types, and the actual parameter can have a currency key reference, a calculated unit, no reference at all, or any of the reference types specified for the input parameter pname1.

Note: This does not apply to return parameters. Return parameters cannot have more than one reference type.

The data type specified for a parameter and the data type required by the reference type must match. This means:

-   The reference type #CUKY only allows actual parameters of the types CURR, DECFLOAT34, DEC, and FLTP.
-   The reference type #UNIT only allows actual parameters of the types QUAN, DECFLOAT16, DECFLOAT34, DEC, FLTP, INT1, INT2, or INT4.
-   The reference type #CALC only allows actual parameters of the type DECFLOAT34.
-   The reference type #NONE accepts all data types except for CURR and QUAN, because these data types force a reference type.

Hints

-   The [generic data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_generic_types.htm) numeric has a different scope of data types than CDS amount fields and CDS quantity fields. When numeric is specified together with a reference type, the valid data types for the actual parameter are the intersection of the two requirements.
-   Casting and conversions may be required for the actual parameters. For example, the generic data type numeric does not support the data type abap.curr. The conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_unit_curr_v2.htm) can be used to convert fields of the data type abap.curr to a data type that is allowed for numeric, so that they can be used as actual parameter for a parameter typed with numeric.

Variant 2   

WITH REFERENCE TYPE CASE ...

Effect

The reference type of the input parameter or return parameter can be defined dynamically, depending on the reference types of the input parameters. This is done using case statements. The following rules apply:

-   Each parameter can have exactly one CASE statement.
-   A CASE statement can have one or more WHEN branches.
-   A WHEN branch can have one or more conditions. Multiple conditions can be combined with AND.
-   For input parameters, the ELSE branch is optional. For the return parameter, the ELSE branch is mandatory.


### abencds_scalar_typing.htm

---
title: "CDS FDL - typing"
description: |
  Syntax dtype(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm)                       WITH REFERENCE TYPE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)  simple_type(https://help.sap.com/doc/abapdocu
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_typing.htm"
abapFile: "abencds_scalar_typing.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abencds", "scalar", "typing"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm) →  [ABAP CDS - SQL-Based Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_function.htm) →  [CDS FDL - DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_scalar_function.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20FDL%20-%20typing%2C%20ABENCDS_SCALAR_TYPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS FDL - typing

Syntax

  [dtype](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm)                       *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*
*|* [simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm)                 *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*
*|* [data\_element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm)                *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*
*|* [generic\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_generic_types.htm)                *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*
*|* TYPE OF ParameterReference  *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)*\]*

Addition:

[... WITH REFERENCE TYPE](#!ABAP_ONE_ADD@1@)

Effect

The input parameters of [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") can be typed as follows:

-   Using a [built-in ABAP Dictionary data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm).
-   Using a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") defined using [DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm).
-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry").
-   Using the [generic data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_generic_types.htm) numeric.
    
    Note: The generic type any is only available for analytical scalar functions.
    
-   Referencing another input parameter using the syntax statement TYPE OF ParameterReference. ParameterReference can be any input parameter from the parameter list of the current scalar function that is typed with a built-in data type, a simple type, a data element, or a generic type.
    
    Note: You cannot reference the return parameter.
    
    Note: You cannot reference an input parameter that itself references an input parameter.
    

The return parameter of an SQL-based scalar function can be typed as follows:

-   Using a [built-in ABAP Dictionary data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm).
-   Using a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") defined using [DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm).
-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry").
-   Referencing another input parameter using the syntax statement TYPE OF ParameterReference. ParameterReference can be any of the input parameters from the parameter list of the current scalar function that is typed with a built-in data type, a simple type, a data element, or a generic type.
    
    Note: You cannot reference an input parameter that itself references an input parameter.
    

Example

The following example demonstrates the definition, implementation, and use of an SQL-based scalar function with input parameters.

CDS scalar function definition

The following CDS scalar function DEMO\_CDS\_SCALAR\_RATIO defines two input parameters:

-   portion: Typed with the generic type numeric. Accepts all available reference types.
-   total: Typed with reference to the input parameter portion.

The return parameter is typed with a built-in data type.

define scalar function DEMO\_CDS\_SCALAR\_RATIO
  with parameters
    portion: numeric
      with reference type \[ #CUKY, #UNIT, #CALC, #NONE \],
    total  : type of portion
      with reference type of portion
  returns abap.decfloat34
    with reference type #NONE;

CDS scalar function implementation reference

The scalar function implementation reference DEMO\_CDS\_SCALAR\_RATIO\_SQL binds the scalar function to the SQL Engine and defines the method EXECUTE of the class CL\_DEMO\_CDS\_SCALAR\_RATIO as AMDP function implementation.

AMDP function implementation

The following listing shows the AMDP function implementation. The input parameter portion is divided by the input parameter total and multiplied by 100 to get the percentage of portion in relation to total.

METHOD execute BY DATABASE FUNCTION
               FOR HDB
               LANGUAGE SQLSCRIPT
               OPTIONS READ-ONLY.
  result = portion / total \* 100;
ENDMETHOD.

Use in a CDS view entity

The following CDS view entity uses the scalar function DEMO\_CDS\_SCALAR\_RATIO as an element in the SELECT list to calculate the occupancy of a flight.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, scalar func'
define view entity DEMO\_CDS\_SCALAR\_USE\_RATIO
  as select from sflight
{
  key carrid                  as Carrid,
  key connid                  as Connid,
  key fldate                  as Fldate,
      seatsocc                as BookedSeats,
      seatsmax                as TotalSeats,
      DEMO\_CDS\_SCALAR\_RATIO(  
        portion => seatsocc,  
        total   => seatsmax ) as OccupationRatio
}

Access Using ABAP SQL

The following code snippet demonstrates how the CDS view entity can be accessed. The value of the column OccupationRatio is calculated by the AMDP function implementation.

SELECT \*
  FROM demo\_cds\_scalar\_use\_ratio
  INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Addition   

... WITH REFERENCE TYPE

Effect

Specifies a reference type. Reference types allow the handling of [CDS amount fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and [CDS quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_glosry.htm "Glossary Entry"). The addition is described in topic [CDS FDL - WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm).

Continue
[CDS FDL - WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_with_reference_type.htm)


### abencds_define_scalar_function.htm

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
