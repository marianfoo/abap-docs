---
title: "CDS DDL - Annotation Syntax, subannos"
description: |
  Syntax ... subAnno1:   value(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_value.htm)   :  subannos   :  arrelem(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_array.htm)
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_subanno.htm"
abapFile: "abencds_annotations_syntax_subanno.htm"
keywords: ["do", "if", "try", "data", "abencds", "annotations", "syntax", "subanno"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_usage.htm) →  [CDS DDL - Annotation Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20Annotation%20Syntax%2C%20subannos%2C%20ABENCDS_ANNOTATIONS_SYNTAX_SUBANNO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

CDS DDL - Annotation Syntax, subannos

Syntax

... subAnno1*\[*:   [value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_value.htm)  *\]*
           *|**\[*: { subannos } *\]*
           *|**\[*: \[ [arrelem](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_array.htm) \] *\]*
           *|**\[*[.subAnno*\[* ... *\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_name.htm)*\]*,
    subAnno2*\[*:   [value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_value.htm)  *\]*
           *|**\[*: { subannos } *\]*
           *|**\[*: \[ [arrelem](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_array.htm) \] *\]*
           *|**\[*[.subAnno*\[* ... *\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_name.htm)*\]*,
    ...

Effect

Comma-separated list of [subannotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensub_annotation_glosry.htm "Glossary Entry") subAnno1, subAnno2, ... in the curly brackets of an [annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax.htm). The name of a subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmain_annotation_glosry.htm "Glossary Entry"):

-   A colon (:) followed by the following:
    -   An [annotation value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_value_glosry.htm "Glossary Entry") [value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_value.htm)
    -   Further [subannotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensub_annotation_glosry.htm "Glossary Entry") subannos specified in curly brackets { ... }.
    -   Elements of an [annotation array](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_array_glosry.htm "Glossary Entry") [arrelem](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_array.htm) in square brackets \[ ... \]
-   The chaining of the subannotations subAnno1, subAnno2, ... with a further subannotation [subAnno](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_name.htm) using a period (.).

Only those subannotations should be specified that are [supported](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_annotation_sub.htm) by the associated [annotation definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

Hint

As well as by using a comma-separated list in curly brackets, individual subannotations can also be specified using individual [structured annotation names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_name.htm).

Example

The following [annotation definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") is available.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoSubAnnos: {  
    subAnno1: Boolean;  
    subAnno2: { subAnno1: Integer;  
                subAnno2: { subAnno1: Integer;  
                            subAnno2: Integer; } } };

The annotation can then, for example, be specified as follows:

@DemoSubAnnos: {subAnno1: true,
                subAnno2: { subAnno1: 1,
                            subAnno2: { subAnno1: 1,
                                        subAnno2: 2 } } }

This example has the same semantics as the example using [structured names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax_name.htm).