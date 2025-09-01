  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations.htm) →  [ABAP CDS - SAP Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_sap.htm) →  [ABAP CDS - Framework-Specific Annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm) →  [ABAP CDS - Framework-Specific Annotation Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_tables.htm) → 

ABAP CDS, Annotation Array

This example shows how an [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry") is evaluated in a piece of DDL source code.

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
                fieldannos  = DATA(annos) ).
    cl\_demo\_output=>display( annos ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program reads the element annotations of the following CDS view:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ANNOARR'
define view demo\_cds\_annotation\_array
  as select from
    demo\_expressions
    {
      @Consumption.filter.hierarchyBinding:
         \[ { type: '...', value: '...', variableSequence: 1 },
           { type: '...', value: '...', variableSequence: 2 } \]
      id
    }

An [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry") Consumption.filter.hierarchyBinding with two elements is assigned to the view field ID and each of the elements is structured using three [subannotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensub_annotation_glosry.htm "Glossary Entry") type, value, and variableSequence.

The annotation array is a subannotation of a [framework-specific annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm) delivered by SAP and defined as follows in its [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

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

In the case of elements of the annotation array, square brackets are specified in the [tabular list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_tables.htm) of the framework-specific annotations. These brackets are used as placeholders for the $ signs used in the internal metadata repository, which enclose the serial index of an array element.