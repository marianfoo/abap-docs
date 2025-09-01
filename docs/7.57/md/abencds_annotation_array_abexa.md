  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) →  [ABAP CDS - Framework-Specific Annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) →  [ABAP CDS - Framework-Specific Annotation Syntax](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS, Annotation Array, ABENCDS_ANNOTATION_ARRAY_ABEXA, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS, Annotation Array

This example shows how an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") is evaluated in a piece of DDL source code.

Source Code   

REPORT demo\_cds\_annotation\_array.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_dd\_ddl\_analyze=>get\_annotations(
      EXPORTING ddlnames = VALUE #( ( 'DEMO\_CDS\_ANNOTATION\_ARRAY' ) )
                leaves\_only = abap\_true
      IMPORTING
                fieldannos  = FINAL(annos) ).
    cl\_demo\_output=>display( annos ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The program reads the element annotations of the following CDS view entity:

define view entity demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: #ELEMENT, value: '...', variableSequence: 1 },
           { type: #CONSTANT, value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) delivered by SAP and defined as follows in its [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):

annotation Consumption
{
   ...
   filter
   {
      ...
      hierarchyBinding : array of
      {
          type: String(12) enum { ELEMENT;
                                  PARAMETER;
                                  CONSTANT;
                                  USER\_INPUT;
                                  SYSTEM\_FIELD; };
         value : String(512);
         variableSequence : Integer;
      };
   };
};

In the case of elements of the annotation array, square brackets are specified in the [tabular list](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.