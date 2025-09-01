  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk.htm) →  [ABAP CDS - Framework-Specific Annotation Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk_tables.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%2C%20Annotation%20Array%2C%20ABENCDS_ANNOTATION_ARRAY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS, Annotation Array

This example shows how an [annotation array](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_array_glosry.htm "Glossary Entry") is evaluated in a piece of DDL source code.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_annotation\_array DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_annotation\_array IMPLEMENTATION.
  METHOD main.
    cl\_dd\_ddl\_analyze=>get\_annotations(
         EXPORTING ddlnames = VALUE #( ( 'DEMO\_CDS\_ANNOTATION\_ARRAY' ) )
                   leaves\_only = abap\_true
         IMPORTING
                   fieldannos  = FINAL(annos) ).
    out->write( annos ).
  ENDMETHOD.
ENDCLASS.

Description   

The class reads the element annotations of the following CDS view entity:

define view entity demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: #ELEMENT, value: '...', variableSequence: 1 },
           { type: #CONSTANT, value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_array_glosry.htm "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensub_annotation_glosry.htm "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk.htm) delivered by SAP and defined as follows in its [annotation definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

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

In the case of elements of the annotation array, square brackets are specified in the [tabular list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk_tables.htm) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.