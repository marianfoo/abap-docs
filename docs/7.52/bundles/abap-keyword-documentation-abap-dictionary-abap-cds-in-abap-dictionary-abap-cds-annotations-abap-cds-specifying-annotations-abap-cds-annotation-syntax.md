# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS - Annotation Syntax

Included pages: 5


### abencds_annotations_syntax.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) → 

ABAP CDS - Annotation Syntax

Syntax

@*\[*<*\]*Anno*\[*: [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\)) *\]*
       *|**\[*: { [subannos](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) } *\]*
       *|**\[*: \[ [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) \] *\]*
       *|**\[*[.subAnno*\[* ... *\]*](javascript:call_link\('abencds_annotations_syntax_name.htm'\))*\]*

Effect

A [CDS annotation](javascript:call_link\('abencds_annotations.htm'\)) is specified in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") by using fixed [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry"). This syntax dictates the following:

-   The annotation is introduced using the character @ or the characters @<. @< is used when specifying the annotation after a list element in a comma-separated or semicolon-separated list.

-   A [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") Anno consisting of letters, numbers, and underscores and starting with a letter. A main annotation that is not structured using [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") can be specified precisely once in a [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)).

-   One of the following optional alternatives specified after a colon (:):

-   An [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))

-   [Subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") [subannos](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) specified in curly brackets { ... }.

-   Elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) specified in square brackets \[ ... \].

-   The [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") Anno concatenated with a [subannotation](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") [subAnno](javascript:call_link\('abencds_annotations_syntax_name.htm'\)) using a period (.). The combination Anno.subAnno is a structured annotation name that can be extended using further subannotations. A structured annotation name must be unique within a [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)).

Only those annotations should be specified for which a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") exists. Alongside the syntax rules above, the annotation definition also specifies the following:

-   The statement [define annotation](javascript:call_link\('abencds_f1_define_annotation.htm'\)) defines the name, the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"), the layout of the [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry"), and whether the annotation in question is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry").

-   The [annotations](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) of an annotation definition specify the scope of the annotation, whether it can be moved to metadata extensions, and whether a particular annotation value is translatable text.

In the [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") for [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"), [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for [metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"), and the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") for [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"), the syntax check permits only those annotations that follow the rules of an annotation definition. In the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") for [data definitions](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry"), annotation definitions modify the source code colors and code completion in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). Currently, however, they are not covered by the syntax check.

Notes

-   The evaluation of the annotations of CDS source code is currently the responsibility of the framework in which the [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") is used.
    
-   The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE for [evaluating annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) of CDS entities return derived and inherited annotations alongside the annotations specified directly in the associated DDL source code.
    
-   The annotations specified in the DDL source code of a CDS entity can be supplemented or overridden using the annotations of [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). Here the annotations are specified with the same syntax as in the DDL source code of a CDS entity, with the following restrictions:
    

-   @< cannot be used for introducing an annotation.

-   Only those annotations can be specified for which this is noted in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

-   There is a set of [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) predefined by SAP, comprising [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") evaluated by the ABAP runtime environment and [framework-specific annotations](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry") evaluated by other frameworks. All other annotations are not usually evaluated. It cannot be guaranteed, however, that a framework permits all annotations.
    
-   The program ABAP\_DOCU\_CDS\_ANNOS\_OVERVIEW shows all SAP annotations and their properties.
    

Example

The following DDL source code for defining a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") contains ABAP annotations and other annotations at the allowed [positions](javascript:call_link\('abencds_annotations_scopes.htm'\)) (in other words, for the entire view, for the elements of the SELECT list, and for an input parameter).

@EndUserText.label: 'Demo View with Annotations'
@AbapCatalog.sqlViewName: 'DEMO\_VIEW\_ANNOT'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientHandling.type: #CLIENT\_DEPENDENT
@DemoAnno.vAnnot0
@DemoAnno.vAnnot1:'abc'
@DemoAnno.vAnnot2:123
@DemoAnno.vAnnot3:\[ 123, 456, 789 \]
@DemoAnno.vAnnot4:{ annot0, annot1:'abc', annot2:123 }
@DemoAnno.vAnnot5.annot0
@DemoAnno.vAnnot5.annot1:'abc'
@DemoAnno.vAnnot5.annot2:123
@DemoAnno.vAnnot6:\[ { annot0,       annot1:'abc', annot2:123 },  
                    { annot0:false, annot1:'def', annot2:456 } \]
@DemoAnno.vAnnot7:{ annot0,
                    annot1:\[ 123, 456, 789 \],
                    annot2:{ annot0, annot1:'abc', annot2:123 } }
define view demo\_cds\_view\_annotations
  with parameters
    @DemoAnno.pAnnot1:'abc'
    @DemoAnno.pAnnot2:123
    @EndUserText.label:'Input Parameter'
    param : syst\_uname  
    @<Environment.systemField:#USER
  as select from
    demo\_expressions
    {
          @DemoAnno.fAnnot0
      key id   as key\_field  
          @<DemoAnno.fAnnot1:'abc'
          @<DemoAnno.fAnnot2:123,
          @EndUserText:{ label:'Some field', quickInfo:'Some info' }
          @DemoAnno.fAnnot3:\[ 123, 456, 789 \]
          num1 as some\_field  
          @<DemoAnno.fAnnot4:{ annot0, annot1:'abc', annot2:123 }
    }

The [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") are as follows:

-   EndUserText.label, AbapCatalog.sqlViewName, and ClientHandling.type for the full view

-   EndUserText.label and EndUserText.quickInfo for the element some\_field of the SELECT list

-   EndUserText.label and Environment.systemField for the input parameter param.

The remaining annotations are used as examples for [framework-specific annotations](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry"). An [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") that permits the specified annotations shown here could look like this:

@Scope:\[#ANNOTATE,
        #EXTEND\_VIEW,
        #TABLE\_FUNCTION,
        #VIEW\]
@MetadataExtension.usageAllowed: true
define annotation DemoAnno {  
    vAnnot0: Boolean default true;  
    vAnnot1: String(3);  
    vAnnot2: Integer;  
    vAnnot3: array of Integer;  
    vAnnot4: { annot0:Boolean default true;  
               annot1:String(3);  
               annot2:Integer;}  
    vAnnot5: { annot0:Boolean default true;  
               annot1:String(3);  
               annot2:Integer;}  
    vAnnot6: array of { annot0:Boolean default true;  
                        annot1:String(3);  
                        annot2:Integer;}  
    vAnnot7: { annot0:Boolean default true;  
               annot1: array of Integer;  
               annot2: { annot0:Boolean default true;  
                         annot1:String(3);  
                         annot2:Integer;} };  
    @Scope:\[#PARAMETER\]  
    pAnnot1: String(3);  
    pAnnot2: Integer;  
    @Scope:\[#ELEMENT\]  
    fAnnot0: Boolean default true;  
    fAnnot1: String(3);  
    fAnnot2: Integer;  
    fAnnot3: array of Integer;  
    fAnnot4: { annot0:Boolean default true;  
               annot1:String(3);  
               annot2:Integer;} };

The program DEMO\_CDS\_DDL\_ANNOTATIONS access the metadata created by the specified annotations in the database tables DDHEADANNO, DDFIELDANNO, and DDPARAMETERANNO directly and using the methods of the classes CL\_DD\_DDL\_ANNOTATION\_SERVICE and CL\_DD\_DDL\_ANALYZE and displays it. Note the following in particular:

-   The annotation @DemoAnno.vAnnot3 is an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") consisting of three elements indicated by the indexes $1$, $2$, and $3$.

-   The annotations @DemoAnno.vAnnot4 and @DemoAnno.vAnnot5 show the alternatives to specifying a structured annotation using a [comma-separated list](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) in curly brackets and by using [structured names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).

Unlike the table DDHEADANNO, the tables DDFIELDANNO and DDPARAMETERANNO for the elements and parameters also contain the name of the element or parameter for which an annotation was created.

Continue
[ABAP CDS - Annotation Syntax, value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))
[ABAP CDS - Annotation Syntax, subannos](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\))
[ABAP CDS - Annotation Syntax, arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\))
[ABAP CDS - Annotation Syntax, .subAnno](javascript:call_link\('abencds_annotations_syntax_name.htm'\))


### abencds_annotations_syntax_value.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Annotation Syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) → 

ABAP CDS - Annotation Syntax, value

Syntax

... literal
  *|* #SYMBOL
  *|* true*|*false
  *|* null

Effect

An [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") can be specified directly after the colon : of an [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)). The following can be specified for the annotation value:

-   Literals

Character literals or numeric literals enclosed in quotation marks. A numeric literal can have a period (.) as a decimal separator and can be specified with an exponent in scientific notation.

-   Enumeration symbols #SYMBOL

Enumeration symbols are specified directly after the # character and without quotation marks.

-   Truth values true and false

These values can be enclosed in quotation marks but do not have to be.

-   Null value null

This value can be specified with quotation marks for [element annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)). This means that the annotations are ignored in the [evaluation](javascript:call_link\('abencds_annotations_analysis.htm'\)) by default. The value null cannot be specified as an [element](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) of [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") and can only be specified in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the element annotations.

Only those annotation values should be specified that are supported by the [specified type](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)) of the associated [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). Unless a default value is specified, a value should be specified in all cases. Non-specified annotation values are not replaced by the default value when the annotation is saved internally and evaluated.

Notes

-   No syntax checks are performed on an annotation value in the [DDL for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), except for the formal rules above. The annotation is generally only handled correctly when evaluated or activated or by the framework if the annotation value follows the rule in the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

-   The framework in question is responsible for applying the correct default value if annotation values are not specified.

Example

Applies the following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):

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


### abencds_annotations_syntax_subanno.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Annotation Syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) → 

ABAP CDS - Annotation Syntax, subannos

Syntax

... subAnno1*\[*:   [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))  *\]*
           *|**\[*: { subannos } *\]*
           *|**\[*: \[ [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) \] *\]*
           *|**\[*[.subAnno*\[* ... *\]*](javascript:call_link\('abencds_annotations_syntax_name.htm'\))*\]*,
    subAnno2*\[*:   [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))  *\]*
           *|**\[*: { subannos } *\]*
           *|**\[*: \[ [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) \] *\]*
           *|**\[*[.subAnno*\[* ... *\]*](javascript:call_link\('abencds_annotations_syntax_name.htm'\))*\]*,
    ...

Effect

Comma-separated list of [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subAnno1, subAnno2, ... in the curly brackets of an [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)). The name of a subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry"):

-   A colon (:) followed by the following:

-   An [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))

-   Further [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subannos specified in curly brackets { ... }.

-   Elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) in square brackets \[ ... \]

-   The chaining of the subannotations subAnno1, subAnno2, ... with a further subannotation [subAnno](javascript:call_link\('abencds_annotations_syntax_name.htm'\)) using a period (.).

Only those subannotations should be specified that are [supported](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) by the associated [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

Note

As well as by using a comma-separated list in curly brackets, individual subannotations can also be specified using individual [structured annotation names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).

Example

Applies the following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):

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

This example has the same semantics as the example using [structured names](javascript:call_link\('abencds_annotations_syntax_name.htm'\)).


### abencds_annotations_syntax_array.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Annotation Syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) → 

ABAP CDS - Annotation Syntax, arrelem

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

Notes

-   Annotation arrays with elements of different types and categories can be specified in the syntax of the [DDL for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)). Arrays of this type are not supported in [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). Square brackets for annotation arrays can be nested directly in data definitions. The nesting of arrays is also not supported in annotation definitions. The internal metadata repository counts the nested arrays when indexing the elements, but otherwise they are ignored. They are not returned by [evaluations](javascript:call_link\('abencds_annotations_analysis.htm'\)) of the annotations based on this metadata.

-   Only annotations indicated as annotation arrays by the square brackets are indexed internally and can be found as array elements in [evaluations](javascript:call_link\('abencds_annotations_analysis.htm'\)). If an annotation @Annot is defined as an annotation array in its [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") but specified as @Annot: value instead of @annot: \[value\] in CDS source code, it is not handled as an annotation array.

Example

Applies the following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):

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

The following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") is applied. This is the definition of a structured annotation array.

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


### abencds_annotations_syntax_name.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Annotation Syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)) → 

ABAP CDS - Annotation Syntax, .subAnno

Syntax

... .subAnno*\[*:   [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))  *\]*
           *|**\[*: { [subannos](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) } *\]*
           *|**\[*: \[ [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) \] *\]*
           *|**\[*.subAnno*\[* ... *\]**\]*

Effect

Concatenates an [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) with a [subannotation](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") subanno. The concatenation is indicated by a period (.). The name of the subannotation can contain letters, numbers, and underscores only and must start with a letter. The same information can be specified after the name as specified after the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry"):

-   A colon (:) followed by the following:

-   An [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") [value](javascript:call_link\('abencds_annotations_syntax_value.htm'\))

-   Further [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") [subannos](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) specified in curly brackets { ... }.

-   Elements of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") [arrelem](javascript:call_link\('abencds_annotations_syntax_array.htm'\)) in square brackets \[ ... \]

-   A concatenation with a further subannotation subAnno using a period (.).

Only those subannotations should be specified that are [supported](javascript:call_link\('abencds_f1_define_annotation_sub.htm'\)) by the associated [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

Notes

-   Alongside individual subannotations specified using structured annotation names. multiple subannotations can be specified using a [comma-separated list](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)) and curly brackets.

-   A structured annotation name must be unique within the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the annotation.

Example

Applies the following [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):

@Scope:\[#VIEW, #EXTEND\_VIEW\]  
define annotation  
  DemoSubAnnos: {  
    subAnno1: Boolean;  
    subAnno2: { subAnno1: Integer;  
                subAnno2: { subAnno1: Integer;  
                            subAnno2: Integer; } } };

The subannotations can then, for example, be specified as follows:

@DemoSubAnnos.subAnno1: true
@DemoSubAnnos.subAnno2.subAnno1: 1
@DemoSubAnnos.subAnno2.subAnno2.subAnno1: 1
@DemoSubAnnos.subAnno2.subAnno2.subAnno2: 2

This example has the same semantics as the example using [comma-separated lists](javascript:call_link\('abencds_annotations_syntax_subanno.htm'\)).
