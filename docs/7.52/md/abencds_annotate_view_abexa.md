  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

CDS Metadata Extensions with CDS Variants

The example demonstrates the [evaluation](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)) of CDS annotations that are defined in CDS metadata extensions.

Source Code

REPORT demo\_cds\_mde\_variants.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->next\_section( 'No Meta Data Extension' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        metadata\_extension =     abap\_false
      IMPORTING
        element\_annos      =     DATA(element\_annos) ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->next\_section( 'With Meta Data Extension'
      )->begin\_section( 'No Variant' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        metadata\_extension =     abap\_true
      IMPORTING
        element\_annos      =     element\_annos ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->next\_section( 'DemoVariant1' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        variant            =     'DEMOVARIANT1'
        metadata\_extension =     abap\_true
      IMPORTING
        element\_annos      =     element\_annos ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->next\_section( 'DemoVariant2' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        variant            =     'DEMOVARIANT2'
        metadata\_extension =     abap\_true
      IMPORTING
        element\_annos      =     element\_annos ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->next\_section( 'Wrong Variant' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        variant            =     '�wrxlbrxlkrk'
        metadata\_extension =     abap\_true
      IMPORTING
        element\_annos      =     element\_annos ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example program uses the method GET\_ANNOS of class CL\_DD\_DDL\_ANNOTATION\_SERVICE to access the following CDS view:

@AbapCatalog.sqlViewName: 'DEMOCDSVIEWMDE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions: true
define view Demo\_Cds\_MDE
  as select from
    demo\_expressions
    {
        @UI.dataPoint.title: 'View, title'
        @UI.dataPoint.description: 'View, description'
        @UI.dataPoint.longDescription: 'View, longdescription'
      'X' as element
    }
    where
      id = 'X'          

The annotations of the view are extended or overridden by the following [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"):

-   DEMO\_CDS\_MDE\_INDSTR\_NO\_VARIANT

@Metadata.layer: #INDUSTRY
annotate view Demo\_Cds\_MDE with
{
  @UI.dataPoint.title: 'MDE INDUSTRY, no variant, title'
  @UI.dataPoint.description: 'MDE INDUSTRY, no variant, description'
  element;
}

-   DEMO\_CDS\_MDE\_INDSTR\_VARIANT\_1

@Metadata.layer: #INDUSTRY
annotate view Demo\_Cds\_MDE with
  variant
    DemoVariant1
{
  @UI.dataPoint.longDescription: 'MDE INDUSTRY, DemoVariant1, longDescription'
  element;
}

-   DEMO\_CDS\_MDE\_INDSTR\_VARIANT\_2

@Metadata.layer: #INDUSTRY
annotate view Demo\_Cds\_MDE with
  variant
    DemoVariant2
{
  @UI.dataPoint.title: 'MDE INDUSTRY, DemoVariant2, title'
  @UI.dataPoint.description: 'MDE INDUSTRY, DemoVariant2, description'
  element;
}

-   DEMO\_CDS\_MDE\_PARTNR\_NO\_VARIANT

@Metadata.layer: #PARTNER
annotate view Demo\_Cds\_MDE with
{
  @UI.dataPoint.title: 'MDE PARTNER, no variant, title'
  element;
}

-   DEMO\_CDS\_MDE\_PARTNR\_VARIANT\_1

@Metadata.layer: #PARTNER
annotate view Demo\_Cds\_MDE with
  variant
    DemoVariant1
{
  @UI.dataPoint.title: 'MDE PARTNER, DemoVariant1, title'
  element;
}

-   DEMO\_CDS\_MDE\_PARTNR\_VARIANT\_2

@Metadata.layer: #PARTNER
annotate view Demo\_Cds\_MDE with
  variant
    DemoVariant2
{
  @UI.dataPoint.title: 'MDE PARTNER, DemoVariant2, title'
  @UI.dataPoint.description: 'MDE PARTNER, DemoVariant2, description'
  element;
}

The evaluation is done with different parameters for the method GET\_ANNOS:

-   If the value of abap\_false is transferred to the parameter METADATA\_EXTENSION, the default evaluation of the metadata extensions is switched off for the view and the annotations that are specified in the source code are returned.

-   If the value of abap\_true is transferred to the parameter METADATA\_EXTENSION (default behavior), all existing metadata extensions for the view are evaluated as follows.

-   If the name of a CDS variant is not transferred, only annotations from metadata extensions that are not assigned to a variant are used. DEMO\_CDS\_MDE\_PARTNR\_NO\_VARIANT is evaluated first and the annotation @UI.dataPoint.title is found there. This is ignored in the next metadata extension in the hierarchy, DEMO\_CDS\_MDE\_INDSTR\_NO\_VARIANT, from which only @UI.dataPoint.description is used. Finally, UI.dataPoint.longDescription is used from the view itself, which has no entry in a metadata extension.

-   If the name of the CDS variant DemoVariant1 is transferred, annotations from the metadata extensions that are assigned to this variant are used first, and then annotations from metadata extensions that are not assigned to a variant. DEMO\_CDS\_MDE\_PARTNR\_VARIANT\_1 is evaluated first and the annotation @UI.dataPoint.title is found there. In the next metadata extension in the hierarchy, DEMO\_CDS\_MDE\_INDSTR\_VARIANT1, the annotation @UI.dataPoint.longDescription is found. No annotation is found in DEMO\_CDS\_MDE\_PARTNR\_NO\_VARIANT. In DEMO\_CDS\_MDE\_INDSTR\_NO\_VARIANT, the annotation @UI.dataPoint.description (not used until now) is found and used. The annotations of the source code of the view are all overridden.

-   If the name of the CDS variant DemoVariant2 is passed, DEMO\_CDS\_MDE\_PARTNR\_VARIANT\_2 is evaluated first and the annotations UI.dataPoint.title and @UI.dataPoint.description are found there. In the next metadata extension in the hierarchy, DEMO\_CDS\_MDE\_INDSTR\_VARIANT2, there are no annotations that have not already been used. The same applies to DEMO\_CDS\_MDE\_PARTNR\_NO\_VARIANT and DEMO\_CDS\_MDE\_INDSTR\_NO\_VARIANT, which are evaluated next. Therefore, the annotation UI.dataPoint.longDescription from the view itself is used.

-   If the name of an invalid CDS variant is passed, an empty internal table is returned.

The column SOURCEDDLX in the internal tables produced contains the metadata extension in which an annotation is specified.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.