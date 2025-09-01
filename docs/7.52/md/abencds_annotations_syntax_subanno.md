  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_usage.htm) →  [ABAP CDS - Annotation Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) → 

ABAP CDS - Annotation Syntax, subannos

Syntax

... subAnno1*\[*:   [value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_value.htm)  *\]*
           *|**\[*: { subannos } *\]*
           *|**\[*: \[ [arrelem](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_array.htm) \] *\]*
           *|**\[*[.subAnno*\[* ... *\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm)*\]*,
    subAnno2*\[*:   [value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_value.htm)  *\]*
           *|**\[*: { subannos } *\]*
           *|**\[*: \[ [arrelem](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_array.htm) \] *\]*
           *|**\[*[.subAnno*\[* ... *\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm)*\]*,
    ...

Effect

Comma-separated list of [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") subAnno1, subAnno2, ... in the curly brackets of an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm). The name of a subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_annotation_glosry.htm "Glossary Entry"):

-   A colon (:) followed by the following:

-   An [annotation value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry") [value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_value.htm)

-   Further [subannotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensub_annotation_glosry.htm "Glossary Entry") subannos specified in curly brackets { ... }.

-   Elements of an [annotation array](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") [arrelem](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_array.htm) in square brackets \[ ... \]

-   The chaining of the subannotations subAnno1, subAnno2, ... with a further subannotation [subAnno](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm) using a period (.).

Only those subannotations should be specified that are [supported](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_annotation_sub.htm) by the associated [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

Note

As well as by using a comma-separated list in curly brackets, individual subannotations can also be specified using individual [structured annotation names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm).

Example

Applies the following [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoSubAnnos: {  
    subAnno1: Boolean;  
    subAnno2: { subAnno1: Integer;  
                subAnno2: { subAnno1: Integer;  
                            subAnno2: Integer; } } };

The annotation can then, for example, be specified as follows:

@DemoSubAnnos: {subAnno1: true,
                subAnno2: {subAnno1: 1,
                            subAnno2: {subAnno1: 1,
                                        subAnno2: 2 } } }

This example has the same semantics as the example using [structured names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_name.htm).