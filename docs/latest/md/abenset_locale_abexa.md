  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage_settings.htm) →  [Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Setting%20the%20Text%20Environment%2C%20ABENSET_LOCALE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Setting the Text Environment

This example demonstrates how to set the text environment explicitly.

Source Code   

\* Public class definition
CLASS cl\_demo\_set\_locale DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_set\_locale IMPLEMENTATION.
  METHOD main.
    DATA text\_tab TYPE HASHED TABLE OF string
                       WITH UNIQUE KEY table\_line.
    text\_tab = VALUE #(
      ( \`Cudar Vilmos\`  )
      ( \`Csernus G�bor\` ) ).
    SET LOCALE LANGUAGE 'E'.
    SORT text\_tab AS TEXT.
    out->write( text\_tab ).
    SET LOCALE LANGUAGE 'H'.
    SORT text\_tab AS TEXT.
    out->write( text\_tab ).
    SET LOCALE LANGUAGE ' '.
  ENDMETHOD.
ENDCLASS.

Description   

This example shows the effect of the locale of the text environment on sorts. In Hungarian text environments, Cs and Cu are sorted differently than in English environments.