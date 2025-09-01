  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) →  [Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Setting the Text Environment, ABENSET_LOCALE_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Setting the Text Environment

This example demonstrates how to set the text environment explicitly.

Source Code   

REPORT demo\_set\_locale.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA text\_tab TYPE HASHED TABLE OF string
                       WITH UNIQUE KEY table\_line.
    text\_tab = VALUE #(
      ( \`Cudar Vilmos\`  )
      ( \`Csernus Gábor\` ) ).
    SET LOCALE LANGUAGE 'E'.
    SORT text\_tab AS TEXT.
    cl\_demo\_output=>write( text\_tab ).
    SET LOCALE LANGUAGE 'H'.
    SORT text\_tab AS TEXT.
    cl\_demo\_output=>write( text\_tab ).
    SET LOCALE LANGUAGE ' '.
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example shows the effect of the locale of the text environment on sorts. In Hungarian text environments, Cs and Cu are sorted differently than in English environments.