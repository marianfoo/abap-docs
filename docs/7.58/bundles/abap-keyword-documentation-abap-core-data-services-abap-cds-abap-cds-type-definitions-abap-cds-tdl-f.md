# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Type Definitions / ABAP CDS - TDL for Type Definitions / CDS TDL - DEFINE TYPE / ABAP CDS - Enumerated Types

Included pages: 7


### abencds_enumeration_types.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Enumerated%20Types%2C%20ABENCDS_ENUMERATION_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Enumerated Types

A [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") is a [CDS user-defined type](javascript:call_link\('abencds_user_defined_type_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") that defines an [enumerated type](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry"). CDS enumerated types are defined with the following [CDS TDL](javascript:call_link\('abencds_tdl_glosry.htm'\) "Glossary Entry") statement in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"):

-   [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\))

CDS enumerated types are mainly used to check allowed values. They restrict the values that can be passed to CDS elements or CDS parameters, which are typed with an enumerated type.

-   In ABAP CDS, enumerated types can be used for typing of elements or parameters, in cast expressions, as operands in expressions, and in comparisons. The methods of the class CL\_DD\_SOBJECT\_FACTORY handle CDS enumerated types and evaluate fields typed with reference to an enumerated type.
-   In ABAP, a CDS enumerated type can be directly used for the typing of enumeration variables and its enumeration constants can be used as operands in read positions. Before the first usage in an ABAP program, an [enumerated structure](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") with the name of the CDS enumerated type is implicitly declared in the global context of the program. The enumerated constants of the CDS enumerated type are represented by the components of this structure in alphabetical order. From that point on, a CDS enumerated type can be used in exactly the same way as ABAP enumerated type with such an enumerated structure. For a complete description of the use of enumerated objects in ABAP, see the topic [Enumerated Objects (enum)](javascript:call_link\('abenenumerated_types_usage.htm'\)).

A [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") cannot be used as a data type in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").

Frameworks:

-   [CDS user-defined types](javascript:call_link\('abencds_user_defined_type_glosry.htm'\) "Glossary Entry") are designed specifically for the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"). They support metadata for [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") and SAP Fiori-based scenarios.
-   CDS user-defined types are supported by analytical runtimes such as the [ABAP Analytical Engine](javascript:call_link\('abenabap_ae_glosry.htm'\) "Glossary Entry").
-   The [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") of a CDS user-defined type can be [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

Further Information

ABAP Data Models development guide, section on [CDS enumerated types](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/3a696faff43246cebba2309fb0842acb?version=sap_cross_product_abap).

Hints

-   Enumerated types are also available in the ABAP programming language. Enumerated types in ABAP are described in the following topics:
    -   [TYPES, BEGIN OF ENUM enum\_type](javascript:call_link\('abaptypes_enum.htm'\))
    -   [Enumerated Objects (enum)](javascript:call_link\('abenenumerated_types_usage.htm'\))
-   CDS enumerated types are the successor of [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") with [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry").
-   However, DDIC domains with fixed values are evaluated for the input help of dynpro fields and they are ignored in ABAP programs. CDS enumerated types, on the other hand, make enumerations globally available and reusable in different contexts.

Continue
[CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\))


### abencds_define_enum_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20DEFINE%20TYPE%20ENUM%2C%20ABENCDS_DEFINE_ENUM_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS TDL - DEFINE TYPE ENUM

Syntax

*\[*[@type\_annot1](javascript:call_link\('abencds_enum_type_anno.htm'\))*\]*
*\[*[@type\_annot2](javascript:call_link\('abencds_enum_type_anno.htm'\))*\]*
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

Defines a [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") EnumType in the [CDS TDL](javascript:call_link\('abencds_tdl_glosry.htm'\) "Glossary Entry"). An enumerated type defines a set of [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") EnumConstant1, EnumConstant2, ... and each constant is assigned an [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") Enum1Value1, Enum1Value2, .... [CDS enumerated elements](javascript:call_link\('abencds_enum_element_glosry.htm'\) "Glossary Entry") and [enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") in ABAP that are typed with a CDS enumerated type may take only one of the enumerated values. The enumerated constants and enumerated values define the set of allowed values of an enumerated type.

The statement for defining an enumerated type is DEFINE TYPE ... ENUM. A list of enumerated constants and enumerated values is defined in curly brackets. If an enumerated type EnumTypeStack is typed using another enumerated type EnumTypeBase, the enumerated constants are inherited automatically and the addition ENUM can be left out.

The name EnumType of a CDS enumerated type is defined after the DEFINE TYPE statement. It is in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP. The general rules for CDS object names described in topic [ABAP CDS - General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\)) apply. The name of the CDS enumerated type must be the same as the name of the TDL source code.

The [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") BaseType determines the technical storage type of the enumerated constants and the CDS enumerated elements. The following can be specified as base type:

BaseType

Dictionary Type

abap.int1

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int2

[INT2](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int4

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.char( len ).
len can be 1 to 8.

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len.

abap.numc( len ).
len can be 1 to 8.

[NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len.

The base type has the following effect:

-   The enumerated values must comply with the base type and be within the value range of the base type.
-   The base type describes how each enumeration value of the value set is stored internally. It is part of the compatibility checks during cast expressions and in comparisons with CDS enumerated elements.
-   The base type is the technical storage type of a CDS enumerated type itself.

Note: The base type is the technical storage type of [CDS enumerated elements](javascript:call_link\('abencds_enum_element_glosry.htm'\) "Glossary Entry"). However, in the code element information or in the [debugger](javascript:call_link\('abendebugger_glosry.htm'\) "Glossary Entry"), the data type of CDS enumerated elements is displayed as ENUM.

Components

-   Header annotations [@type\_annot1](javascript:call_link\('abencds_enum_type_anno.htm'\)), [@type\_annot2](javascript:call_link\('abencds_enum_type_anno.htm'\)), ... can be specified in front of the statement DEFINE TYPE. All header annotations are optional, and an enumerated type can also be created without any header annotations.
-   Annotations for enumerated constants enum\_annot1, enum\_annot2, ... can optionally be specified in front of the enumerated constants to add semantic information. The following annotations are available for enumerated constants:
    -   [EndUserText.heading](javascript:call_link\('abencds_enum_type_anno.htm'\))
    -   [EndUserText.label](javascript:call_link\('abencds_enum_type_anno.htm'\))
-   Enumerated constants EnumConstant1, EnumConstant2, ... contain the enumerated values EnumValue1, EnumValue2, ... The data type of each constant is the enumerated type ENUM. Each name EnumConstant1, EnumConstant2, must follow the [naming rules](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Most importantly, it can have up to 30 characters and each name must be unique within the enumerated type.
-   Enumerated values EnumValue1, EnumValue2, ... assign type-compliant values to the enumerated constants. Each enumerated value must be unique within the enumerated type. The order of the specified values is not important. The enumerated values are specified as [untyped literals](javascript:call_link\('abenuntyped_literal_glosry.htm'\) "Glossary Entry"), and their content must be compatible with the base type of the CDS enumerated type in question.
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

The enumerated type can be used for declaring an enumerated variable wd in an ABAP program. By doing so, an [enumerated structure](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") named demo\_cds\_enum\_weekday is implicitly declared in the current context and can be used there. wd initially contains the content of the initial enumerated constant demo\_cds\_enum\_weekday-mon. Note that the components of the structure are ordered alphabetically and not according to their definition.

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
[CDS TDL - CDS Enumerated Type, type\_annot](javascript:call_link\('abencds_enum_type_anno.htm'\))
[CDS TDL - Using CDS Enumerated Types](javascript:call_link\('abencds_use_enum_type.htm'\))
![Example](exa.gif "Example") [CDS TDL - CDS Enumerated Type, Use](javascript:call_link\('abencds_enum_abexa.htm'\))
![Example](exa.gif "Example") [CDS TDL - CDS Enumerated Type, Type Description](javascript:call_link\('abencds_enum_description_abexa.htm'\))


### abencds_enum_type_anno.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) →  [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Enumerated%20Type%2C%20type_annot%2C%20ABENCDS_ENUM_TYPE_ANNO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

CDS TDL - CDS Enumerated Type, type\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an enumerated type annotation in the definition of a CDS enumerated type in front of the statement [DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). Otherwise, a syntax error occurs. The annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified using the value #SIMPLE\_TYPE.

The first column of the table below shows the name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is set implicitly if the annotation is not used explicitly. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value.

-   [AbapCatalog Annotations](#abencds-enum-type-anno-1-------endusertext-annotations---@ITOC@@ABENCDS_ENUM_TYPE_ANNO_2)
-   [ObjectModel Annotations](#abencds-enum-type-anno-3-------inheritance-of-annotations---@ITOC@@ABENCDS_ENUM_TYPE_ANNO_4)

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS object. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

Hint

[CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") (MDE) are not supported for CDS enumerated types. If required, the metadata of an enumerated type can be extended when the enumerated type is used in another CDS object, such as a CDS view entity.

AbapCatalog Annotations   

Technical settings of a CDS enumerated type.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.typeSpec.changeDocumentRelevant

Specifies whether changes to fields with reference to this enumerated type are logged when change document objects are involved.

true:
Change documents are written.
false:
Change documents are not written.

false

true

AbapCatalog.typeSpec.conversionExit

If specified, connects the CDS enumerated type to a [conversion exit](javascript:call_link\('abenconversion_exit_glosry.htm'\) "Glossary Entry").

'name'
The name of the conversion exit can be a character string with a maximum of 5 characters consisting of letters, numbers, and underscores.

\-

\-

-   The change document settings of a CDS enumerated type are similar to the change document settings of DDIC data elements described in topic [DDIC - Semantic Properties of Data Elements](javascript:call_link\('abenddic_data_elements_sema.htm'\)).

EndUserText Annotations   

Translatable texts of a type.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.heading

Translatable heading of a type.

Character string with maximum 55 characters.

\-

\-

EndUserText.label

Translatable short text of a type.

Character string with maximum 60 characters.

\-

\-

EndUserText.quickInfo

Translatable tooltip of a type.

String

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

ObjectModel Annotations   

The following subannotations of ObjectModel define technical settings for a CDS enumerated type.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.upperCase

Specifies whether a CDS enumerated type is transformed to all uppercase letters or not.

true
The output of this CDS enumerated type is all uppercase letters.
false
The output of this CDS enumerated type can be uppercase and lowercase letters. Lowercase letters are preserved.

false

true

-   The annotation @ObjectModel.upperCase is only available if the CDS enumerated type has a character-like data type. In case of numeric types, a syntax check error occurs.
-   The annotation @ObjectModel.upperCase is evaluated by frameworks such as OData.

Inheritance of Annotations   

If a CDS enumerated type is based on another CDS enumerated type, it inherits the annotations of the underlying enumerated type. If required, these annotations can be overwritten using locally defined annotations in the overlying enumerated type.


### abencds_use_enum_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) →  [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20Using%20CDS%20Enumerated%20Types%2C%20ABENCDS_USE_ENUM_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

CDS TDL - Using CDS Enumerated Types

This section summarizes the use of [CDS elements](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry") with an enumerated type.

-   [Declaration](#abencds-use-enum-type-1-------operand-positions-for-cds-elements-with-an-enumerated-type---@ITOC@@ABENCDS_USE_ENUM_TYPE_2)
    -   [CDS Enumerated Type](#abencds-use-enum-type-3-----------cds-enumerated-constant---@ITOC@@ABENCDS_USE_ENUM_TYPE_4)
    -   [CDS Enumerated Element](#abencds-use-enum-type-5-------case-expressions---@ITOC@@ABENCDS_USE_ENUM_TYPE_6)
-   [Cast Expressions](#abencds-use-enum-type-7-------comparisons---@ITOC@@ABENCDS_USE_ENUM_TYPE_8)
-   [Parameter Passing](#abencds-use-enum-type-9-------type-descriptions---@ITOC@@ABENCDS_USE_ENUM_TYPE_10)

Executable Example

[CDS Enumerated Type, Use](javascript:call_link\('abencds_enum_abexa.htm'\))

Declaration   

The following enumerated operands are available:

-   CDS enumerated type
    
    The [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") EnumType itself.
    
-   CDS enumerated constant
    
    An [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") EnumConstant defines a value of the value set of an enumerated type. A CDS enumerated constant is specified using the name of the enumerated type EnumType, followed by a period (.), a hash character (#), and the name of an enumerated constant EnumConstant.
    
    Example: EnumType.#EnumConstant
    
-   CDS enumerated element
    
    A [CDS enumerated element](javascript:call_link\('abencds_enum_element_glosry.htm'\) "Glossary Entry") contains one of the enumerated values of the respective enumerated type. CDS enumerated elements can be defined as follows:
    
    1.  Using a [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)).
    2.  Exposing an [input parameter](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry"), defined in the parameter list after [WITH PARAMETERS](javascript:call_link\('abencds_parameter_list_v2.htm'\)), typed with an enumerated type EnumType as an element in the SELECT list of a CDS entity.
    3.  Exposing a field typed with an enumerated type from a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)) or from an [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry").
    4.  Using a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)) with operands of an enumerated type.
    5.  Reusing an expression from the SELECT list via [$projection](javascript:call_link\('abencds_reusable_expression_v2.htm'\)).
    6.  Using an enumerated constant in the element list of a CDS entity.

The technical storage type of the content of an operand of an enumerated element is the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the CDS enumerated type. However, in the code element information in ADT or in the debugger, the data type of CDS enumerated elements is displayed as ENUM. The possible content is defined by the [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") EnumValue1, EnumValue2, ..., of which exactly one value must have the type-specific initial value.

Example

The following CDS view entity demonstrates operands of an enumerated type.

@AbapCatalog.viewEnhancementCategory: \[#NONE\]
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, enum demo'
define view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_2
  with parameters
    p1 : DEMO\_CDS\_ENUM\_CHAR
  as select from DEMO\_CDS\_ENUM\_TYPE\_USAGE\_1
{
  key Id,
      friday,
      cast(abap.char'A' as DEMO\_CDS\_ENUM\_CHAR) as CastExp,
      $parameters.p1                           as EnumParameterField,
      DEMO\_CDS\_ENUM\_CHAR.#second\_value         as EnumConstantField,
      case friday
      when DEMO\_CDS\_ENUM\_STACK.#FRI
      then DEMO\_CDS\_ENUM\_STACK.#SAT
      else null
      end                                      as EnumCase,
      $projection.EnumCase                     as ReuseField
}

The following image of the code element information of the CDS view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_2 shows that the input parameter p1 and all the fields, except for the key field Id, are typed with an enumerated type.

![Figure](enum1.jpg)

Operand Positions for CDS Elements with an Enumerated Type   

CDS enumerated elements are currently available in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") in the following operand positions:

CDS Enumerated Type   

A CDS enumerated type EnumType can be used in the following places:

-   To type another CDS enumerated type as described in the topic [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)).
    
    Note: The maximum nesting depth is five. This means that a stack of enumerated types can have a maximum of five layers, from base to top-most.
    
-   In [cast expressions in CDS view entities](javascript:call_link\('abencds_cast_expression_v2.htm'\)).
-   In [cast expressions in CDS projection views](javascript:call_link\('abencds_proj_view_element.htm'\)).
    
    Note: Remember that casting in CDS projection views is only possible with the addition PRESERVING TYPE.
    
    Example: cast(ProjField as MyEnumType preserving type) as NewProjField
    
-   For [typing](javascript:call_link\('abencds_typing.htm'\)) of elements in [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") and in [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").
-   For [typing](javascript:call_link\('abencds_typing.htm'\)) of parameters in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), CDS custom entities, and CDS abstract entities
-   In ABAP for typing data objects with the statement TYPE.

CDS Enumerated Constant   

A CDS enumerated constant can be used in the following places:

-   As a CDS element in the SELECT list of a CDS view entity,
    
    Syntax: MyEnum.#EnumConstant as FieldName
    
-   As actual parameters for input parameters of CDS view entities and [CDS analytical queries](javascript:call_link\('abencds_analytic_query_glosry.htm'\) "Glossary Entry").
    
    Note: An enumerated constant of an enumerated type EnumType can be passed to an input parameter that is typed with the same CDS enumerated type EnumType.
    
-   In a simple case expression in the WHEN, THEN, and ELSE branches. However, an enumerated constant is not valid as operand after CASE.
-   In a complex case expression as right-hand operand of the WHEN condition and as operand after THEN.
-   As right-hand operand in a [WHERE](javascript:call_link\('abencds_where_clause_v2.htm'\)) clause in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry"), and [CDS analytical query](javascript:call_link\('abencds_analytic_query_glosry.htm'\) "Glossary Entry").
-   In ABAP for value assignments and in comparisons as described in topic [Enumerated Objects (enum)](javascript:call_link\('abenenumerated_types_usage.htm'\)).

CDS Enumerated Element   

A CDS enumerated element can be used in the following places:

-   As an element in the SELECT list of a CDS entity.
-   As an element in the projection list of a [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry").
-   In a simple case expression of a CDS view entity.
-   In a complex case expression of a CDS view entity.
-   In a reuse expression using $projection in the SELECT list of a CDS view entity and a CDS analytical query.
-   As right-hand operand of a WHERE clause in a CDS entity.
-   As field of the [GROUP BY](javascript:call_link\('abencds_group_by_v2.htm'\)) clause of a CDS entity.
-   As operand of a [HAVING](javascript:call_link\('abencds_having_clause_v2.htm'\)) clause in a CDS entity.
-   As an operand of an association ON condition of a CDS association and of a to-parent association in a CDS view entity, CDS custom entity, CDS abstract entity and CDS transactional query.
-   As an operand of a join ON condition of a join between two data sources in a CDS view entity.
-   In a default filter condition of a CDS association, defined using [WITH DEFAULT FILTER](javascript:call_link\('abencds_simple_association_v2.htm'\)).
-   In ABAP for value assignments and in comparisons as described in topic [Enumerated Objects (enum)](javascript:call_link\('abenenumerated_types_usage.htm'\)).

Example

The following CDS view entity defines a WHERE condition with the CDS enumerated element WEEKDAY and the parameter P\_WEEKDAY. The parameter is also typed with a CDS enumerated type.

@AbapCatalog.viewEnhancementCategory: \[#NONE\]
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, enum'
define view entity DEMO\_CDS\_ENUM\_3
  with parameters
    p\_weekday : DEMO\_CDS\_ENUM\_WEEKDAY
  as select from DEMO\_CDS\_ENUM\_1
{
  key carrid,
  key connid,
  key fldate,
      weekday
}
where
  weekday = $parameters.p\_weekday

The following code snippet accesses the view entity displayed above, passes an actual parameter to the input parameter P\_WEEKDAY, and displays the result.

SELECT \*
FROM demo\_cds\_enum\_3( p\_weekday = @demo\_cds\_enum\_weekday-fri )
INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Example

The following code snippet defines an enumerated variable with reference to a CDS enumerated type in ABAP. It assigns an enumerated constant from the same enumerated type to the variable.

DATA wd\_cds  TYPE demo\_cds\_enum\_weekday.
wd\_cds = demo\_cds\_enum\_weekday-tue.

Case Expressions   

CDS enumerated elements can be used in [simple case expressions](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) and in [complex case expressions](javascript:call_link\('abencds_searched_case_expr_v2.htm'\)) in CDS entities. The following rules apply:

Simple Case expression

-   The operand after CASE must be a CDS enumerated element. CDS enumerated constants and CDS enumerated types are not possible.
-   The operands after WHEN, THEN, and ELSE can be CDS fields with an enumerated data type or CDS enumerated constants.
-   The operands after CASE and WHEN must have the same CDS enumerated type, and also the operands after THEN and ELSE must be of the same CDS enumerated type.

Complex case expression

-   The following rules apply to the condition specified after WHEN:
    -   The left side of the condition must be a CDS enumerated element. CDS enumerated constants and CDS enumerated types are not possible.
    -   The right side of the condition can be a CDS enumerated element or a CDS enumerated constant.
    -   As relational operators, all [comparison operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\)), [IS NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\)), and [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)) are allowed.
    -   The Boolean operators NOT, AND, and OR are allowed.
-   The operands specified in the condition after WHEN must be of the same CDS enumerated type. Otherwise, a syntax check error occurs.

Cast Expressions   

When [casting](javascript:call_link\('abencds_cast_expression_v2.htm'\)) to a CDS enumerated type, the operand of the cast expression must be compatible with the base type of the CDS enumerated type. The [cast matrix](javascript:call_link\('abencds_cast_expression_v2.htm'\)) and the [conversion rules](javascript:call_link\('abencds_cast_expression_rules_v2.htm'\)) for casting apply with respect to the base type.

If the addition PRESERVING TYPE is specified, the data type and length of the operand and the base type of the CDS enumerated type must match exactly.

Comparisons   

For comparisons between operands of an enumerated data type, the rule applies that an operand can only be compared with an operand with the same enumerated type. The values of the operands are compared in accordance with their base type.

An exception to this rule are type stacks. If an enumerated type is defined with reference to another CDS enumerated type, these two types are compatible with each other.

Each enumerated type has an initial enumerated value, which makes checks with the predicate expression [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)) possible.

Example

The following CDS enumerated type DEMO\_CDS\_ENUM\_STACK is based on the CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY. It inherits the definition and the annotations of the referenced type.

@EndUserText.label: 'CDS enum typed with another enum'
define type DEMO\_CDS\_ENUM\_STACK: DEMO\_CDS\_ENUM\_WEEKDAY

DEMO\_CDS\_ENUM\_STACK and DEMO\_CDS\_ENUM\_WEEKDAY are compatible with each other and can be used in comparisons. Example:

IF demo\_cds\_enum\_stack-mon = demo\_cds\_enum\_weekday-fri. ENDIF.

Parameter Passing   

Input parameters that are typed with a CDS enumerated type can have the following actual parameters:

-   A CDS enumerated constant of the same CDS enumerated type.
-   An input parameter that is typed with the same CDS enumerated type.

Type Descriptions   

In [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry"), enumerated operands are described by objects of the class CL\_ABAP\_ENUMDESCR. This class can be used for [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") and [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") purposes. Like any enumerated type, an enumerated type created using RTTC is only compatible with itself.

The following attributes exist in a type description of the class CL\_ABAP\_ENUMDESCR:

-   KIND always has the value E for the elementary base type.
-   TYPE\_KIND always has the value k.
-   BASE\_TYPE\_KIND describes the base type.
-   MEMBERS is a table of the enumerated constants and the associated enumerated values.

Executable Example

[Enumerated Elements, Type Description](javascript:call_link\('abencds_enum_description_abexa.htm'\))

Restrictions

-   CDS enumerated types cannot be used in [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").
-   CDS enumerated types cannot be used for typing in DDIC objects such as [DDIC data types](javascript:call_link\('abenddic_data_types.htm'\)), [DDIC views](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry"), and [DDIC extensions](javascript:call_link\('abenddic_extension_glosry.htm'\) "Glossary Entry").

Hints

-   An enumerated type is always an elementary data type. Likewise, the associated type description class CL\_ABAP\_ENUMDESCR is a subclass of CL\_ABAP\_ELEMDESCR.
-   The base type describes how each enumerated value of the value set is stored internally, but it is not the type of the associated enumerated constant that can be used in a program. Its type is the enumerated type ENUM itself.


### abencds_enum_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) →  [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Enumerated%20Type%2C%20Use%2C%20ABENCDS_ENUM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS TDL - CDS Enumerated Type, Use

This example demonstrates the use of [CDS enumerated types](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry").

The following CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY has the base type abap.int1, the names of the enumerated constants are abbreviations for the days of the week and the enumerated values are 0 to 6.

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

The CDS table function DEMO\_CDS\_TF\_ENUM\_WEEKDAY selects from the database table SFLIGHT.

CDS table function

@EndUserText.label: 'CDS table function, enum demo'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define table function DEMO\_CDS\_TF\_ENUM\_WEEKDAY
returns
{
  key mandt      : s\_mandt;
  key carrid     : s\_carr\_id;
  key connid     : s\_conn\_id;
  key fldate     : s\_date;
      weekday    : int2;
}
implemented by method
  CL\_DEMO\_CDS\_TF\_ENUM=>WEEKDAY;

AMDP function implementation

The AMDP function implementation uses the SAP HANA SQL function WEEKDAY to calculate the integer representation of the day of the week for a given flight date.

METHOD weekday
         BY DATABASE FUNCTION FOR HDB
         LANGUAGE SQLSCRIPT
         OPTIONS READ-ONLY
         USING sflight.
  RETURN
select
mandt,
carrid,
connid,
fldate,
weekday( fldate ) as weekday
from sflight;
ENDMETHOD.

CDS view entity

The CDS view entity DEMO\_CDS\_ENUM\_1 selects from the table function DEMO\_CDS\_TF\_ENUM\_WEEKDAY. It casts the field weekday to the enumerated type DEMO\_CDS\_ENUM\_WEEKDAY.

@EndUserText.label: 'Select from table function'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ENUM\_1
  as select from DEMO\_CDS\_TF\_ENUM\_WEEKDAY
{
  key carrid,
  key connid,
  key fldate,
      cast( weekday as DEMO\_CDS\_ENUM\_WEEKDAY ) as weekday
}

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_enum\_1 DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_enum\_1 IMPLEMENTATION.
  METHOD main.
    SELECT FROM demo\_cds\_enum\_1 FIELDS \* INTO TABLE @DATA(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

The class selects from the CDS view entity DEMO\_CDS\_ENUM\_1 that casts the integer representation of weekdays to a CDS enumerated type. As a consequence, the column weekday contains the names of the enumerated constants as values.


### abencds_enum_description_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) →  [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Enumerated%20Type%2C%20Type%20Description%2C%20ABENCDS_ENUM_DESCRIPTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

CDS TDL - CDS Enumerated Type, Type Description

This example demonstrates type description for CDS enumerated types.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_enum\_type DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_enum\_type IMPLEMENTATION.
  METHOD main.
    TYPES my\_type TYPE demo\_cds\_enum\_weekday.
    FINAL(descr) = cl\_abap\_enumdescr=>describe\_by\_name(
      'DEMO\_CDS\_ENUM\_WEEKDAY' ).
    out->next\_section( 'CL\_ABAP\_ENUMDESCR'
    )->write( descr ).
  ENDMETHOD.
ENDCLASS.

Description   

The type description class CL\_ABAP\_ENUMDESCR returns properties of the CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY.


### abencds_define_enum_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20DEFINE%20TYPE%20ENUM%2C%20ABENCDS_DEFINE_ENUM_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS TDL - DEFINE TYPE ENUM

Syntax

*\[*[@type\_annot1](javascript:call_link\('abencds_enum_type_anno.htm'\))*\]*
*\[*[@type\_annot2](javascript:call_link\('abencds_enum_type_anno.htm'\))*\]*
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

Defines a [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") EnumType in the [CDS TDL](javascript:call_link\('abencds_tdl_glosry.htm'\) "Glossary Entry"). An enumerated type defines a set of [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") EnumConstant1, EnumConstant2, ... and each constant is assigned an [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") Enum1Value1, Enum1Value2, .... [CDS enumerated elements](javascript:call_link\('abencds_enum_element_glosry.htm'\) "Glossary Entry") and [enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") in ABAP that are typed with a CDS enumerated type may take only one of the enumerated values. The enumerated constants and enumerated values define the set of allowed values of an enumerated type.

The statement for defining an enumerated type is DEFINE TYPE ... ENUM. A list of enumerated constants and enumerated values is defined in curly brackets. If an enumerated type EnumTypeStack is typed using another enumerated type EnumTypeBase, the enumerated constants are inherited automatically and the addition ENUM can be left out.

The name EnumType of a CDS enumerated type is defined after the DEFINE TYPE statement. It is in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP. The general rules for CDS object names described in topic [ABAP CDS - General Syntax Rules](javascript:call_link\('abencds_general_syntax_rules.htm'\)) apply. The name of the CDS enumerated type must be the same as the name of the TDL source code.

The [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") BaseType determines the technical storage type of the enumerated constants and the CDS enumerated elements. The following can be specified as base type:

BaseType

Dictionary Type

abap.int1

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int2

[INT2](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int4

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.char( len ).
len can be 1 to 8.

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len.

abap.numc( len ).
len can be 1 to 8.

[NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len.

The base type has the following effect:

-   The enumerated values must comply with the base type and be within the value range of the base type.
-   The base type describes how each enumeration value of the value set is stored internally. It is part of the compatibility checks during cast expressions and in comparisons with CDS enumerated elements.
-   The base type is the technical storage type of a CDS enumerated type itself.

Note: The base type is the technical storage type of [CDS enumerated elements](javascript:call_link\('abencds_enum_element_glosry.htm'\) "Glossary Entry"). However, in the code element information or in the [debugger](javascript:call_link\('abendebugger_glosry.htm'\) "Glossary Entry"), the data type of CDS enumerated elements is displayed as ENUM.

Components

-   Header annotations [@type\_annot1](javascript:call_link\('abencds_enum_type_anno.htm'\)), [@type\_annot2](javascript:call_link\('abencds_enum_type_anno.htm'\)), ... can be specified in front of the statement DEFINE TYPE. All header annotations are optional, and an enumerated type can also be created without any header annotations.
-   Annotations for enumerated constants enum\_annot1, enum\_annot2, ... can optionally be specified in front of the enumerated constants to add semantic information. The following annotations are available for enumerated constants:
    -   [EndUserText.heading](javascript:call_link\('abencds_enum_type_anno.htm'\))
    -   [EndUserText.label](javascript:call_link\('abencds_enum_type_anno.htm'\))
-   Enumerated constants EnumConstant1, EnumConstant2, ... contain the enumerated values EnumValue1, EnumValue2, ... The data type of each constant is the enumerated type ENUM. Each name EnumConstant1, EnumConstant2, must follow the [naming rules](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Most importantly, it can have up to 30 characters and each name must be unique within the enumerated type.
-   Enumerated values EnumValue1, EnumValue2, ... assign type-compliant values to the enumerated constants. Each enumerated value must be unique within the enumerated type. The order of the specified values is not important. The enumerated values are specified as [untyped literals](javascript:call_link\('abenuntyped_literal_glosry.htm'\) "Glossary Entry"), and their content must be compatible with the base type of the CDS enumerated type in question.
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

The enumerated type can be used for declaring an enumerated variable wd in an ABAP program. By doing so, an [enumerated structure](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") named demo\_cds\_enum\_weekday is implicitly declared in the current context and can be used there. wd initially contains the content of the initial enumerated constant demo\_cds\_enum\_weekday-mon. Note that the components of the structure are ordered alphabetically and not according to their definition.

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
[CDS TDL - CDS Enumerated Type, type\_annot](javascript:call_link\('abencds_enum_type_anno.htm'\))
[CDS TDL - Using CDS Enumerated Types](javascript:call_link\('abencds_use_enum_type.htm'\))
![Example](exa.gif "Example") [CDS TDL - CDS Enumerated Type, Use](javascript:call_link\('abencds_enum_abexa.htm'\))
![Example](exa.gif "Example") [CDS TDL - CDS Enumerated Type, Type Description](javascript:call_link\('abencds_enum_description_abexa.htm'\))
