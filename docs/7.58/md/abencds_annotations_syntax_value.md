---
title: "CDS DDL - Annotation Syntax, value"
description: |
  Syntax ... literal  #SYMBOL  truefalse  null Effect An annotation value(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_value_glosry.htm 'Glossary Entry') can be specified directly after the colon : of an annotation(https://help.sap.com/doc/abapdocu_758_inde
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_value.htm"
abapFile: "abencds_annotations_syntax_value.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abencds", "annotations", "syntax", "value"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_usage.htm) →  [CDS DDL - Annotation Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20Annotation%20Syntax%2C%20value%2C%20ABENCDS_ANNOTATIONS_SYNTAX_VALUE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

CDS DDL - Annotation Syntax, value

Syntax

... literal
  *|* #SYMBOL
  *|* true*|*false
  *|* null

Effect

An [annotation value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_value_glosry.htm "Glossary Entry") can be specified directly after the colon : of an [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm). The following can be specified for the annotation value:

-   Literals
    
    Character literals enclosed in quotation marks or numeric literals. A numeric literal can have a period (.) as a decimal separator and can be specified with an exponent in scientific notation.
    A single quote can be used to escape another single quote or, alternatively, using a backslash \\.
    Example: @EndUserText.quickInfo: 'Customer''s first name' is resolved into Customer's first name.
    Alternative: @EndUserText.quickInfo: 'Customer\\'s first name' is resolved into Customer's first name.
    
-   Enumeration symbols #SYMBOL
    
    Enumeration symbols are specified directly after the # character and without quotation marks.
    
-   Truth values true and false
    
    These values can be enclosed in quotation marks but do not have to be.
    
-   Null value null
    
    This value can be specified without quotation marks for [element annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_element_annotation.htm). This means that the annotations are ignored in the [evaluation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_analysis.htm) by default. The value null cannot be specified as an [element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax_array.htm) of [annotation arrays](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_array_glosry.htm "Glossary Entry") and can only be specified in the [scope](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_scopes.htm) of the element annotations.
    

Only those annotation values should be specified that are supported by the [specified type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_annotation_type.htm) of the associated [annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). Unless a default value is specified, a value should be specified in all cases. Non-specified annotation values are not replaced by the default value when the annotation is saved internally and evaluated.

Hints

-   No syntax checks are performed on an annotation value in the [DDL for data definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm), except for the formal rules above. The annotation is generally only handled correctly when evaluated or activated or by the framework if the annotation value follows the rule in the [annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").
-   The framework in question is responsible for applying the correct default value if annotation values are not specified.
-   References for [reference types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_annotation_type.htm) are specified as character literals enclosed in quotation marks. A literal of this type should not contain any blanks and must reference an existing object. This is checked, for example, by the [RAP framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_framework_glosry.htm "Glossary Entry").

Example

The following [annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") is available.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoAnnoValues {  
    subAnno1: Boolean;  
    subAnno2: String(5) enum{FLAG1;FLAG2;FLAG3;};  
    subAnno3: Integer;  
    subAnno4: Decimal(31,2);  
    subAnno5: DecimalFloat;
    subAnno6: EntityRef;  };

The annotation can then, for example, be specified with the following annotation values:

@DemoAnnoValues: {subAnno1: false,
                  subAnno2: #FLAG1,
                  subAnno3: 1234,
                  subAnno4: 123456.78,
                  subAnno5: 1234.5678E-4
                  subAnno6: "DEMO\_CDS\_SPFLI"}