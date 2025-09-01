  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [Runtime Type Services (RTTS)](javascript:call_link\('abenrtti.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Determining%20Object%20Types%2C%20ABENRTTI_OBJECT_TYPE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Determining Object Types

This example demonstrates how the dynamic types of objects can be determined at runtime.

Source Code   

\* CCDEF
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_rtti\_object\_types DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rtti\_object\_types IMPLEMENTATION.
  METHOD main.
    DATA: otype1 TYPE c LENGTH 30 VALUE 'C1',
          otype2 TYPE c LENGTH 30 VALUE 'C2'.
    DATA: oref1 TYPE REF TO object,
          oref2 TYPE REF TO object.
    DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr,
          descr\_ref2 TYPE REF TO cl\_abap\_typedescr.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = otype1
     )->request(   CHANGING field = otype2 ).
    TRY.
        otype1 = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
          EXPORTING
            val                      = otype1
            whitelist                =  \`C1,C2\` ).
        otype2 = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
          EXPORTING
            val                      = otype2
            whitelist                =  \`C1,C2\` ).
      CATCH cx\_abap\_not\_in\_whitelist.
        out->write( 'Input not allowed' ).
        RETURN.
    ENDTRY.
    TRY.
        CREATE OBJECT: oref1 TYPE (otype1),
                       oref2 TYPE (otype2).
      CATCH cx\_sy\_create\_object\_error.
        out->write( 'Create object error!' ).
        RETURN.
      CATCH cx\_root.
        out->write( 'Other error!' ).
        RETURN.
    ENDTRY.
    descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_object\_ref( oref1 ).
    descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_object\_ref( oref2 ).
    TRY.
        IF descr\_ref1 <> descr\_ref2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          oref1 = oref2.
        ENDIF.
      CATCH conv\_exc.
        out->write(
          \`Assignment from type \`   && |\\n| &&
          descr\_ref2->absolute\_name && |\\n| &&
          \`to \`                     && |\\n| &&
          descr\_ref1->absolute\_name && |\\n| &&
          \`not allowed!\` ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example is the equivalent of the [executable example](javascript:call_link\('abenrtti_data_type_abexa.htm'\)) for data types for object types. Here, the dynamic type of reference variables is determined, namely the [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") of the class of the referenced object.