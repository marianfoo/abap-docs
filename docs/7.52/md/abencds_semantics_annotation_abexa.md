  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Evaluation of Annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) → 

ABAP CDS, Evaluation of Annotations

This example demonstrates how [semantics annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") are evaluated.

Source Code

REPORT demo\_cds\_semantics\_annotation.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA incomplete\_addresses TYPE STANDARD TABLE
                              OF demo\_cds\_semantics\_annotation
                              WITH EMPTY KEY.
    cl\_dd\_ddl\_annotation\_service=>get\_drct\_annos\_4\_entity\_elmnts(
      EXPORTING
        entityname =     'DEMO\_CDS\_SEMANTICS\_ANNOTATION'
      IMPORTING
        annos      =     DATA(elementannos) ).
    TYPES element\_anno LIKE LINE OF elementannos.
    DATA address\_annos TYPE STANDARD TABLE OF element\_anno-annoname
                            WITH EMPTY KEY.
    address\_annos = VALUE #(
      ( 'SEMANTICS.NAME.FULLNAME' )
      ( 'SEMANTICS.ADDRESS.STREET' )
      ( 'SEMANTICS.ADDRESS.CITY' )
      ( 'SEMANTICS.ADDRESS.ZIPCODE' )
      ( 'SEMANTICS.ADDRESS.COUNTRY' ) ).
    DATA address\_components TYPE TABLE OF element\_anno-elementname
                                 WITH EMPTY KEY.
    address\_components = VALUE #(
      FOR address\_anno IN address\_annos
      ( VALUE #( elementannos\[ annoname = address\_anno \]-elementname
                 DEFAULT '---' ) ) ).
    SELECT \*
           FROM demo\_cds\_semantics\_annotation
           INTO @DATA(address).
      LOOP AT address\_components INTO DATA(component).
        ASSIGN COMPONENT component OF STRUCTURE address
                                   TO FIELD-SYMBOL(<value>).
        IF sy-subrc <> 0 OR <value> IS INITIAL.
          incomplete\_addresses = VALUE #( BASE incomplete\_addresses
                                          ( address ) ).
          EXIT.
        ENDIF.
      ENDLOOP.
    ENDSELECT.
    cl\_demo\_output=>display( incomplete\_addresses ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program uses a simple example to show how annotations can be evaluated in a framework. All rows in a CDS entity are to be found that do not contain a fully specified address. Here, a fully specified address is simply a set of elements for name, street, city, postal code, and country, none of which can be empty.

To do this, the program uses cl\_dd\_ddl\_annotation\_service=>get\_drct\_annos\_4\_entity\_elmnts to read the element annotations of a CDS entity and gets the names of the elements defined (using [semantics annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\))) as the required components of an address in the internal table address\_components. In the next step, the CDS entity is read using [SELECT](javascript:call_link\('abapselect.htm'\)) and a [dynamic](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) [ASSIGN](javascript:call_link\('abapassign.htm'\)) statement is used to check whether all required elements have a non-initial value for each read row. The output consists of any rows that do not contain a full address.

The following CDS view is used as an example for a CDS entity:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SEMANNO'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_semantics\_annotation
as select from
scustom
{
id,
@Semantics.name.fullName
name,
@Semantics.name.prefix
form,
@Semantics.address.street
street,
@Semantics.address.postBox
postbox,
@Semantics.address.zipCode
postcode,
@Semantics.address.city
city,
@Semantics.address.country
country,
@Semantics.address.subRegion
region,
@Semantics.contact.type
custtype,
@Semantics.language
langu,
@Semantics.eMail.address
email
}    

This view wraps the database table SCUSTOM, which contains address data. The assignment of the semantics annotations to the columns of the database table gives the columns semantics that can be evaluated. Previously, this was only provided by those names and [data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") that are no longer relevant for the evaluation depicted here.