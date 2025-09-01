---
title: "ABAP CDS - Annotation Syntax, value"
description: |
  Syntax ... literal  #SYMBOL  truefalse  null Effect An annotation value(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_value_glosry.htm 'Glossary Entry') can be specified directly after the colon : of an annotation(https://help.sap.com/doc/abapdocu_753_inde
version: "7.53"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax_value.htm"
abapFile: "abencds_annotations_syntax_value.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "annotations", "syntax", "value"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_usage.htm) →  [ABAP CDS - Annotation Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax.htm) → 

ABAP CDS - Annotation Syntax, value

Syntax

... literal
  *|* #SYMBOL
  *|* true*|*false
  *|* null

Effect

An [annotation value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_value_glosry.htm "Glossary Entry") can be specified directly after the colon : of an [annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax.htm). The following can be specified for the annotation value:

-   Literals

Character literals or numeric literals enclosed in quotation marks. A numeric literal can have a period (.) as a decimal separator and can be specified with an exponent in scientific notation.

-   Enumeration symbols #SYMBOL

Enumeration symbols are specified directly after the # character and without quotation marks.

-   Truth values true and false

These values can be enclosed in quotation marks but do not have to be.

-   Null value null

This value can be specified without quotation marks for [element annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_element_annotation.htm). This means that the annotations are ignored in the [evaluation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_analysis.htm) by default. The value null cannot be specified as an [element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_syntax_array.htm) of [annotation arrays](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_array_glosry.htm "Glossary Entry") and can only be specified in the [scope](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_scopes.htm) of the element annotations.

Only those annotation values should be specified that are supported by the [specified type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_annotation_type.htm) of the associated [annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). Unless a default value is specified, a value should be specified in all cases. Non-specified annotation values are not replaced by the default value when the annotation is saved internally and evaluated.

Notes

-   No syntax checks are performed on an annotation value in the [DDL for data definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm), except for the formal rules above. The annotation is generally only handled correctly when evaluated or activated or by the framework if the annotation value follows the rule in the [annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

-   The framework in question is responsible for applying the correct default value if annotation values are not specified.

Example

The following [annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") is applied.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoAnnoValues {  
    subAnno1: Boolean;  
    subAnno2: String(5) enum{FLAG1;FLAG2;FLAG3;};  
    subAnno3: Integer;  
    subAnno4: Decimal(31,2);  
    subAnno5: DecimalFloat;  };

The annotation can then, for example, be specified with the following annotation values:

@DemoAnnoValues: {subAnno1: false,
                  subAnno2: #FLAG1,
                  subAnno3: 1234,
                  subAnno4: 123456.78,
                  subAnno5: 1234.5678E-4}