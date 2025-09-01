  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) →  [ABAP CDS - Definition of Annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition.htm) →  [ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddla_syntax.htm) →  [CDS DDL - DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation.htm) → 

CDS DDL - DEFINE ANNOTATION, type

Syntax

... dtype *\[*enum { SYMBOL1; SYMBOL2; ... }*\]* *\[*default val*|*#SYMBOL*\]*

Effect

Defines the [annotation values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_value_glosry.htm "Glossary Entry") to be specified when a [CDS annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") defined using [define annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation.htm) is [used](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm).

dtype is used to define the type. The following tables show the possible options for dtype and their meaning for the annotation values. dtype and any predefined values are case-sensitive.

Value Types

dtype

Annotation Value

Boolean

Truth values true and false.

Decimal(len,dec)

Numeric literal without quotation marks and with an optional decimal point and a maximum of len minus dec integer digits and a maximum of dec decimal places. A number between 1 and 31 can be specified for len and a number between 0 and 14 can be specified for dec, but dec cannot be greater than len.

DecimalFloat

Numeric literal without quotation marks. The same values can be specified as in the source field of an ABAP conversion from [c to decfloat34](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_c.htm)

Integer

Numeric literal without quotation marks and decimal separator in the value range of the ABAP type [i](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_numeric.htm).

String(len)

Character literal in quotation marks with a maximum length len. A number between 0 and 1298 can be specified for len.

Reference Types

dtype

Annotation Value

AssociationRef

Name of a CDS association

ElementRef

Name of an element

EntityRef

Name of an entity

KeyElement

Name of a key field

ParameterRef

Name of a parameter

When [used](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax_value.htm), the annotation value of a reference type must be specified as a character literal in quotation marks and without blanks. The object specified must exist.

enum { SYMBOL1; SYMBOL; ... } can be used to specify a semicolon-separated (;) list of enumeration symbols SYMBOL1, SYMBOL2, ... in uppercase letters and in curly brackets. A semicolon must also be placed after the final entry in the list here. When an annotation is used, only one of the enumeration symbols prefixed with the # character can be used as an [annotation value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_value_glosry.htm "Glossary Entry"). If enumeration symbols are specified for the type String, the symbols become the enumerated values explicitly. In this case, the length specified for String must be at least as long as the longest enumeration symbol.

default can be used to specify a type-compliant default value applied when an annotation is used and no explicit [annotation value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_value_glosry.htm "Glossary Entry") is specified. The following applies here:

-   Only true can be specified as a default value for the type Boolean.

-   If enumeration symbols are defined, the default value of one of these symbols must be prefixed with the # character.

-   No default value can be specified for reference types.

-   No default values can be specified for the elements of an [annotation array](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_array_glosry.htm "Glossary Entry").

Hints

-   The truth values for the type boolean can also be specified as 'true' and 'false' in quotation marks.

-   The smallest feasible size is 1 for one character.

-   The default value defined using default describes the default value applied when the annotation is used in its framework. If an annotation is not used, there can be another default value (described in the documentation of the annotation). The default value of the annotation definition is ignored when the annotation is saved and [evaluated](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_analysis.htm) internally.

Example

The following annotation definition specifies truth values as possible annotation values of the annotation:

@Scope:\[#VIEW, #EXTEND\_VIEW\]
define annotation DemoAnnoBoolean : Boolean;

The annotation can be used as followed in CDS source code:

-   @DemoAnnoBoolean: true

-   @DemoAnnoBoolean: false

-   @DemoAnnoBoolean: 'true'

-   @DemoAnnoBoolean: 'false'

Example

The following annotation definition specifies enumerated values as possible annotation values of the annotation. In the case of the type String, the enumeration symbols are also the enumerated values and a length of at least 10 must be specified for the type, since the longest enumeration symbol as 10 characters.

@Scope:\[#VIEW, #EXTEND\_VIEW\]
define annotation DemoAnnoEnum : String(10)  
                                 enum{SHORT\_TEXT;TEXT;LONG\_TEXT;};

The annotation can be used as followed in CDS source code:

-   @DemoAnnoEnum: #SHORT\_TEXT

-   @DemoAnnoEnum: #TEXT

-   @DemoAnnoEnum: #LONG\_TEXT

Example

The following annotation definition specifies numeric literals as possible annotation values of the annotation (a default value is defined here).

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation DemoAnnoDefault : Integer default 0;

The annotation can be used as follows in CDS source code, with and without a value being specified:

-   @DemoAnnoDefault

-   @DemoAnnoDefault: 100

Example

The following annotation definition has incorrect syntax. The length of the specified default value must be at least 3.

annotation DemoAnno : String(1) default 'XXX';