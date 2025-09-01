  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [CDS DDL - Annotation Syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20Annotation%20Syntax%2C%20arrelem%2C%20ABENCDS_ANNOTATIONS_SYNTAX_ARRAY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - Annotation Syntax, arrelem

Syntax

...  [value1](javascript:call_link\('abencds_annotations_syntax_value.htm'\))*|* {[subannos1](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\))},
     [value2](javascript:call_link\('abencds_annotations_syntax_value.htm'\))*|* {[subannos2](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\))},
     ...

Effect

Comma-separated list of array elements in the square brackets of an [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)). This makes the annotation specified in front of the colon into an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") with the elements specified in the brackets. The possible elements of an array are:

-   [Annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") [value1](javascript:call_link\('abencds_annotations_syntax_value.htm'\)), [value2](javascript:call_link\('abencds_annotations_syntax_value.htm'\)), ...
-   [Subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") [subannos1](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)), [subannos2](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)), ... in curly brackets.

Arrays are not intended to be nested directly and one element in an array represents an annotation to which the same rules apply as to single annotations. The difference is that an array element does not have an explicit name. In the internal repository of the metadata defined by an annotation, however, an array element is identified uniquely using an index appended to the name of the array. This makes it possible to find the array element when it is [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)).

Array elements should only be specified for annotations for which this is [noted](javascript:call_link\('abencds_f1_define_annotation_arr.htm'\)) in the associated [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

Hints

-   Annotation arrays with elements of different types and categories can be specified in the syntax of the [DDL for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)). Arrays of this type are not supported in [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). Square brackets for annotation arrays can be nested directly in data definitions. The nesting of arrays is also not supported in annotation definitions. The internal metadata repository counts the nested arrays when indexing the elements, but otherwise they are ignored.
-   They are not returned by [evaluations](javascript:call_link\('abencds_annotations_analysis.htm'\)) of the annotations based on this metadata.
-   Only annotations indicated as annotation arrays by the square brackets are indexed internally and can be found as array elements in [evaluations](javascript:call_link\('abencds_annotations_analysis.htm'\)). If an annotation @Annot is defined as an annotation array in its [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") but specified as @Annot: value instead of @annot: \[value\] in CDS source code, it is not handled as an annotation array.

Example

The following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") is available.

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoAnnoStringArray: array of String(1);

The annotation can then, for example, be specified as follows:

@DemoAnnoStringArray:\[ 'a', 'b', 'c' \]

The annotation array has three elements, each of which is assigned a suitable annotation value. Evaluating the annotation using the method GET\_DIRECT\_ANNOS\_4\_ENTITY of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE produces the following

ANNONAME

VALUE

DEMOANNOSTRINGARRAY$1$

'a'

DEMOANNOSTRINGARRAY$2$

'b'

DEMOANNOSTRINGARRAY$3$

'c'

The elements are indicated using the indexes $1$, $2$, and $3$.

Example

The following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") is available. This is the definition of a structured annotation array.

@Scope:\[#VIEW, #EXTEND\_VIEW\]
define annotation  
  DemoAnnoArray: array of { subAnno1: Integer;  
                            subAnno2: Integer;  
                            subAnno3: Integer; }

The annotation can then, for example, be specified with four structured array elements as follows:

@DemoAnnoArray:\[ {subAnno1:11, subAnno2:12, subAnno3:13},
                 {subAnno1:21, subAnno2:22, subAnno3:23},
                 {subAnno1:31, subAnno2:32, subAnno3:33},
                 {subAnno1:41, subAnno2:42, subAnno3:43} \]

Executable Example

[ABAP CDS, Annotation Array](javascript:call_link\('abencds_annotation_array_abexa.htm'\))