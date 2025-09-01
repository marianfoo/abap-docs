  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Definition of Annotations](javascript:call_link\('abencds_anno_definition.htm'\)) →  [ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) →  [CDS DDL - DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) → 

CDS DDL - DEFINE ANNOTATION, type

Syntax

... dtype *\[*enum { SYMBOL1; SYMBOL2; ... }*\]* *\[*default val*|*#SYMBOL*\]*

Effect

Defines the [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") to be specified when a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") defined using [define annotation](javascript:call_link\('abencds_f1_define_annotation.htm'\)) is [used](javascript:call_link\('abencds_annotations_syntax.htm'\)) in a CDS entity.

dtype is used to define the type. The following tables show the possible options for dtype and their meaning for the annotation values. dtype and any predefined values are case-sensitive.

Value Types

dtype

Annotation Value

Boolean

Truth values true and false.

Decimal(len,dec)

Numeric literal without quotation marks and with an optional decimal point and a maximum of len minus dec integer digits and a maximum of dec decimal places. A number between 1 and 31 can be specified for len and a number between 0 and 14 can be specified for dec, but dec cannot be greater than len.

DecimalFloat

Numeric literal without quotation marks. The same values can be specified as in the source field of an ABAP conversion from [c to decfloat34](javascript:call_link\('abenconversion_type_c.htm'\))

Integer

Numeric literal without quotation marks and decimal separator in the value range of the ABAP type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)).

String(len)

Character literal in quotation marks with a maximum length len. A number between 0 and 1298 can be specified for len.

Reference Types

dtype

Annotation Value

AssociationRef

Name of a CDS association that is exposed in the SELECT list where the annotation is used. If the association is defined in the same CDS entity, the annotation value must be the association's name. If the association is defined in another entity, the annotation value must be a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)).

ElementRef

Name of an element of the CDS entity where the annotation is used. For elements of association targets, the annotation value is a [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)).

EntityRef

Name of any CDS entity.

KeyElement

Name of a key field of the CDS entity where the annotation is used.

LocalDefinitionRef

Name of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)) of the current CDS entity. The data source can either be defined after FROM or as an [association](javascript:call_link\('abencds_simple_association_v2.htm'\)). If an alias name is specified for the data source, this alias name must be specified as annotation value.

ParameterRef

Name of a parameter of the CDS entity where the annotation is used.

When [used](javascript:call_link\('abencds_annotations_syntax_value.htm'\)), the annotation value of a reference type must be specified as a character literal in quotation marks and without blanks. The object specified must exist.

enum { SYMBOL1; SYMBOL; ... } can be used to specify a semicolon-separated (;) list of enumeration symbols SYMBOL1, SYMBOL2, ... in uppercase letters and in curly brackets. A semicolon must also be placed after the final entry in the list here. When an annotation is used, only one of the enumeration symbols prefixed with the # character can be used as an [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). If enumeration symbols are specified for the type String, the symbols become the enumerated values explicitly. In this case, the length specified for String must be at least as long as the longest enumeration symbol.

default can be used to specify a type-compliant default value applied when an annotation is used and no explicit [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") is specified. The following applies here:

-   Only true can be specified as a default value for the type Boolean.
-   If enumeration symbols are defined, the default value of one of these symbols must be prefixed with the # character.
-   No default value can be specified for reference types.
-   No default values can be specified for the elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry").

Hints

-   The truth values for the type boolean can also be specified as 'true' and 'false' in quotation marks.
-   The smallest feasible size is 1 for one character.
-   The default value defined using default describes the default value applied when the annotation is used in its framework. If an annotation is not used, there can be another default value (described in the documentation of the annotation). The default value of the annotation definition is ignored when the annotation is saved and [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) internally.

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

The following annotation definition has incorrect syntax. The specified length 1 is not sufficient for the specified default value of length 3.

annotation DemoAnno : String(1) default 'XXX';