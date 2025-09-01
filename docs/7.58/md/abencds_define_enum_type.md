---
title: "CDS TDL - DEFINE TYPE ENUM"
description: |
  Syntax @type_annot1(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm) @type_annot2(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm) ... DEFINE TYPE EnumType : BaseType ENUM  @enum_annot1 EnumCo
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_enum_type.htm"
abapFile: "abencds_define_enum_type.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "class", "data", "types", "abencds", "define", "enum", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_type.htm) →  [ABAP CDS - Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enumeration_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20DEFINE%20TYPE%20ENUM%2C%20ABENCDS_DEFINE_ENUM_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS TDL - DEFINE TYPE ENUM

Syntax

*\[*[@type\_annot1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm)*\]*
*\[*[@type\_annot2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm)*\]*
...
  DEFINE TYPE EnumType : BaseType ENUM
  {
    *\[*@enum\_annot1*\]*
     EnumConstant1 = EnumValue1 *|* INITIAL;
    *\[*@enum\_annot2*\]*
     EnumConstant2 = EnumValue2 *|* INITIAL;
    *\[*...*\]*
  }
*|* DEFINE TYPE EnumTypeStack : EnumTypeBase*\[*;*\]*

Effect

Defines a [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") EnumType in the [CDS TDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl_glosry.htm "Glossary Entry"). An enumerated type defines a set of [enumerated constants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") EnumConstant1, EnumConstant2, ... and each constant is assigned an [enumerated value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_value_glosry.htm "Glossary Entry") Enum1Value1, Enum1Value2, .... [CDS enumerated elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_element_glosry.htm "Glossary Entry") and [enumerated variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") in ABAP that are typed with a CDS enumerated type may take only one of the enumerated values. The enumerated constants and enumerated values define the set of allowed values of an enumerated type.

The statement for defining an enumerated type is DEFINE TYPE ... ENUM. A list of enumerated constants and enumerated values is defined in curly brackets. If an enumerated type EnumTypeStack is typed using another enumerated type EnumTypeBase, the enumerated constants are inherited automatically and the addition ENUM can be left out.

The name EnumType of a CDS enumerated type is defined after the DEFINE TYPE statement. It is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. The general rules for CDS object names described in topic [ABAP CDS - General Syntax Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_general_syntax_rules.htm) apply. The name of the CDS enumerated type must be the same as the name of the TDL source code.

The [base type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbase_type_glosry.htm "Glossary Entry") BaseType determines the technical storage type of the enumerated constants and the CDS enumerated elements. The following can be specified as base type:

BaseType

Dictionary Type

abap.int1

[INT1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)

abap.int2

[INT2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)

abap.int4

[INT4](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm)

abap.char( len ).
len can be 1 to 8.

[CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length len.

abap.numc( len ).
len can be 1 to 8.

[NUMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length len.

The base type has the following effect:

-   The enumerated values must comply with the base type and be within the value range of the base type.
-   The base type describes how each enumeration value of the value set is stored internally. It is part of the compatibility checks during cast expressions and in comparisons with CDS enumerated elements.
-   The base type is the technical storage type of a CDS enumerated type itself.

Note: The base type is the technical storage type of [CDS enumerated elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_element_glosry.htm "Glossary Entry"). However, in the code element information or in the [debugger](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendebugger_glosry.htm "Glossary Entry"), the data type of CDS enumerated elements is displayed as ENUM.

Components

-   Header annotations [@type\_annot1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm), [@type\_annot2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm), ... can be specified in front of the statement DEFINE TYPE. All header annotations are optional, and an enumerated type can also be created without any header annotations.
-   Annotations for enumerated constants enum\_annot1, enum\_annot2, ... can optionally be specified in front of the enumerated constants to add semantic information. The following annotations are available for enumerated constants:
    -   [EndUserText.heading](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm)
    -   [EndUserText.label](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm)
-   Enumerated constants EnumConstant1, EnumConstant2, ... contain the enumerated values EnumValue1, EnumValue2, ... The data type of each constant is the enumerated type ENUM. Each name EnumConstant1, EnumConstant2, must follow the [naming rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_general_syntax_rules.htm). Most importantly, it can have up to 30 characters and each name must be unique within the enumerated type.
-   Enumerated values EnumValue1, EnumValue2, ... assign type-compliant values to the enumerated constants. Each enumerated value must be unique within the enumerated type. The order of the specified values is not important. The enumerated values are specified as [untyped literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuntyped_literal_glosry.htm "Glossary Entry"), and their content must be compatible with the base type of the CDS enumerated type in question.
-   The addition INITIAL must be specified for exactly one constant. It generates the initial value of the base type.

Hint

An enumerated type is always an elementary data type. Likewise, the associated type description class CL\_ABAP\_ENUMDESCR is a subclass of CL\_ABAP\_ELEMDESCR.

Example

Definition of an enumerated type DEMO\_CDS\_ENUM\_WEEKDAY. The base type is abap.int1 and the enumerated values of the enumerated constants MON, TUE, ... are 0 to 6.

@EndUserText.label: 'Days of the week'
define type DEMO\_CDS\_ENUM\_WEEKDAY : abap.int1 enum
{
  @EndUserText.label: 'Monday'
  MON = initial;
  @EndUserText.label: 'Tuesday'
  TUE =       1;
  @EndUserText.label: 'Wednesday'
  WED =       2;
  @EndUserText.label: 'Thursday'
  THU =       3;
  @EndUserText.label: 'Friday'
  FRI =       4;
  @EndUserText.label: 'Saturday'
  SAT =       5;
  @EndUserText.label: 'Sunday'
  SUN =       6;
}

The enumerated type can be used for declaring an enumerated variable wd in an ABAP program. By doing so, an [enumerated structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_structure_glosry.htm "Glossary Entry") named demo\_cds\_enum\_weekday is implicitly declared in the current context and can be used there. wd initially contains the content of the initial enumerated constant demo\_cds\_enum\_weekday-mon. Note that the components of the structure are ordered alphabetically and not according to their definition.

DATA wd TYPE demo\_cds\_enum\_weekday.
ASSERT wd = demo\_cds\_enum\_weekday-mon.
cl\_demo\_output=>display( demo\_cds\_enum\_weekday ).

The class CL\_DEMO\_CDS\_ENUM\_TYPE uses the type description class CL\_ABAP\_ENUMDESCR to return properties of the CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY.

TYPES my\_type TYPE demo\_cds\_enum\_weekday.
DATA  my\_data TYPE my\_type.
FINAL(descr) = cl\_abap\_enumdescr=>describe\_by\_data( my\_data ).
cl\_demo\_output=>next\_section( 'CL\_ABAP\_ENUMDESCR' ).
FINAL(enum\_descr) = CAST cl\_abap\_enumdescr(
cl\_abap\_typedescr=>describe\_by\_data( my\_data ) ).
cl\_demo\_output=>new( )->write\_data( enum\_descr->kind
      )->write\_data( enum\_descr->type\_kind
      )->write\_data( enum\_descr->base\_type\_kind
      )->write\_data( enum\_descr->members
      )->display( ).

The CDS view entity DEMO\_CDS\_ENUM\_2 defines two CDS enumerated elements in its SELECT list:

-   The field weekday casts the field INT1 into the CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY.
-   The field EnumConstant defines an enumerated constant as element in the SELECT list.
    
    @EndUserText.label: 'Cast to enum'
    @AccessControl.authorizationCheck: #NOT\_REQUIRED
    define view entity DEMO\_CDS\_ENUM\_2
      as select from demo\_ddic\_types
    {
      key id,
          int1,
          cast(int1 as DEMO\_CDS\_ENUM\_WEEKDAY) as weekday,
          DEMO\_CDS\_ENUM\_CHAR.#first\_value     as EnumConstant
    }
    

The following code snippets demonstrates access to the CDS view entity using ABAP SQL. It first inserts data into the database table DEMO\_DDIC\_TYPES and then it selects all elements from the CDS view entity. The columns weekday and enumconstant of the inline declared table result both have an enumerated type.

Note: If the field INT1 contains a value that is not contained in the list of enumerated values of the CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY, a runtime error occurs.

\*fill database table
DELETE FROM demo\_ddic\_types.
INSERT demo\_ddic\_types FROM TABLE @( VALUE #(
( id = 'A' int1 = 1 )
( id = 'B' int1 = 6 )
\*( id = 'C' int1 = 7 ) -> runtime error. 7 is not an allowed value.
) ).
\*SELECT from cds view entity
SELECT \*
FROM demo\_cds\_enum\_2
INTO TABLE @DATA(result).
\*display result
cl\_demo\_output=>display( result ).

Example

The following CDS enumerated type DEMO\_CDS\_ENUM\_STACK has the CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY as base type. It inherits the definition and the annotations of the referenced base type.

@EndUserText.label: 'CDS enum typed with another enum'
define type DEMO\_CDS\_ENUM\_STACK: DEMO\_CDS\_ENUM\_WEEKDAY

The following CDS view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_1 uses an enumerated constant of the enumerated type as element of the SELECT list.

@EndUserText.label: 'CDS view entity, enumerated types'
define view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_1
  as select from demo\_expressions
{
  key id                       as Id,
  num1 as integer1,
      DEMO\_CDS\_ENUM\_STACK.#FRI as friday
}

The following screenshot shows the code element information. The element typed with the enumerated type has the data type enum(3).

![Figure](enum.jpg)
Continue
[CDS TDL - CDS Enumerated Type, type\_annot](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm)
[CDS TDL - Using CDS Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_use_enum_type.htm)
![Example](exa.gif "Example") [CDS TDL - CDS Enumerated Type, Use](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_abexa.htm)
![Example](exa.gif "Example") [CDS TDL - CDS Enumerated Type, Type Description](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_description_abexa.htm)