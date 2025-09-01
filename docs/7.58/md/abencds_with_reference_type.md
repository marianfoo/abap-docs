---
title: "CDS FDL - WITH REFERENCE TYPE"
description: |
  Syntax Forms Static Reference Type Specification WITH REFERENCE TYPE #CUKY  #UNIT  #CALC  #NONE  WITH REFERENCE TYPE OF pname Dynamic Reference Type Specification WITH REFERENCE TYPE CASE WHEN pname1: reference AND pname2: referenceAND... THEN reference WHEN ...
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_with_reference_type.htm"
abapFile: "abencds_with_reference_type.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencds", "with", "reference", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_functions.htm) →  [ABAP CDS - SQL-Based Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm) →  [CDS FDL - DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_scalar_function.htm) →  [CDS FDL - typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_typing.htm) → 

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

[SQL-based scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") support the handling of [CDS amount fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and [CDS quantity fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_quantity_glosry.htm "Glossary Entry"). CDS amount fields and CDS quantity fields are fields with a reference to a [currency key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencurrency_key_glosry.htm "Glossary Entry"), a [unit key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunit_glosry.htm "Glossary Entry"), or a [calculated unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_calculated_unit_glosry.htm "Glossary Entry"). Scalar functions can handle these references. They can define which reference types are allowed for each [input parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry") and for the return parameter. The [actual parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenactual_parameter_glosry.htm "Glossary Entry") passed to the input parameters must provide the required reference types. If the return parameter requires a reference type, the required annotation must be provided when the scalar function is used. Missing reference types for actual parameters or the return parameter result in a syntax check error.

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
    -   #CUKY: The actual parameters passed must be [CDS amount fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field_glosry.htm "Glossary Entry"). They must have a valid data type and they must be annotated with [Semantics.amount.currencyCode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_element_annotation.htm).
    -   #UNIT: The actual parameters passed must be [CDS quantity fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_quantity_glosry.htm "Glossary Entry"). They must have a valid data type and they must be annotated with [Semantics.quantity.unitOfMeasure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_element_annotation.htm).
    -   #CALC: The passed actual parameters must be [CDS calculated quantities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"). This means that they must be the result of a calculation, they have data type DECFLOAT34, and they must have a calculated unit reference using the annotation [Semantics.quantity.unitOfMeasure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_element_annotation.htm).
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

-   The [generic data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_generic_types.htm) numeric has a different scope of data types than CDS amount fields and CDS quantity fields. When numeric is specified together with a reference type, the valid data types for the actual parameter are the intersection of the two requirements.
-   Casting and conversions may be required for the actual parameters. For example, the generic data type numeric does not support the data type abap.curr. The conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v2.htm) can be used to convert fields of the data type abap.curr to a data type that is allowed for numeric, so that they can be used as actual parameter for a parameter typed with numeric.

Variant 2   

WITH REFERENCE TYPE CASE ...

Effect

The reference type of the input parameter or return parameter can be defined dynamically, depending on the reference types of the input parameters. This is done using case statements. The following rules apply:

-   Each parameter can have exactly one CASE statement.
-   A CASE statement can have one or more WHEN branches.
-   A WHEN branch can have one or more conditions. Multiple conditions can be combined with AND.
-   For input parameters, the ELSE branch is optional. For the return parameter, the ELSE branch is mandatory.