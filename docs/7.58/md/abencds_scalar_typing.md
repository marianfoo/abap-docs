  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_fdl.htm) →  [ABAP CDS - FDL for Function Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_functions.htm) →  [ABAP CDS - Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_functions.htm) →  [ABAP CDS - SQL-Based Scalar Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm) →  [CDS FDL - DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_scalar_function.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20FDL%20-%20typing%2C%20ABENCDS_SCALAR_TYPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS FDL - typing

Syntax

  [dtype](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typing.htm)                       *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_with_reference_type.htm)*\]*
*|* [simple\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_simple_type.htm)                 *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_with_reference_type.htm)*\]*
*|* [data\_element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm)                *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_with_reference_type.htm)*\]*
*|* [generic\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_generic_types.htm)                *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_with_reference_type.htm)*\]*
*|* TYPE OF ParameterReference  *\[*[WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_with_reference_type.htm)*\]*

Addition:

[... WITH REFERENCE TYPE](#!ABAP_ONE_ADD@1@)

Effect

The input parameters of [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_glosry.htm "Glossary Entry") can be typed as follows:

-   Using a [built-in ABAP Dictionary data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typing.htm).
-   Using a [CDS simple type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry") defined using [DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_simple_type.htm).
-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry").
-   Using the [generic data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_generic_types.htm) numeric.
    
    Note: The generic type any is only available for analytical scalar functions.
    
-   Referencing another input parameter using the syntax statement TYPE OF ParameterReference. ParameterReference can be any input parameter from the parameter list of the current scalar function that is typed with a built-in data type, a simple type, a data element, or a generic type.
    
    Note: You cannot reference the return parameter.
    
    Note: You cannot reference an input parameter that itself references an input parameter.
    

The return parameter of an SQL-based scalar function can be typed as follows:

-   Using a [built-in ABAP Dictionary data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typing.htm).
-   Using a [CDS simple type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry") defined using [DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_simple_type.htm).
-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry").
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

Specifies a reference type. Reference types allow the handling of [CDS amount fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field_glosry.htm "Glossary Entry") and [CDS quantity fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_quantity_glosry.htm "Glossary Entry"). The addition is described in topic [CDS FDL - WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_with_reference_type.htm).

Continue
[CDS FDL - WITH REFERENCE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_with_reference_type.htm)