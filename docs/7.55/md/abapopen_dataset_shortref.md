  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  O

OPEN DATASET - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset.htm)

Syntax

OPEN DATASET dset
  FOR *{* INPUT *|* OUTPUT *|* APPENDING *|* UPDATE *}*
  IN *{* *{* BINARY MODE *}*
     *|* *{* TEXT MODE ENCODING *{* DEFAULT
                            *|* *{*UTF-8 *\[*SKIPPING*|*WITH BYTE-ORDER MARK*\]**}*
                            *|* NON-UNICODE *}*
                   *\[*WITH *{*NATIVE*|*SMART*|*UNIX*|*WINDOWS*}* LINEFEED*\]* *}*
     *|* *{* LEGACY BINARY MODE *\[**{*BIG*|*LITTLE*}* ENDIAN*\]*
                            *\[*CODE PAGE cp*\]* *}*
     *|* *{* LEGACY TEXT MODE *\[**{*BIG*|*LITTLE*}* ENDIAN*\]*
                          *\[*CODE PAGE cp*\]*
                          *\[*WITH *{*NATIVE*|*SMART*|*UNIX*|*WINDOWS*}* LINEFEED*\]* *}* *}*
  *\[*AT POSITION pos*\]*
  *\[*TYPE attr*\]*
  *\[*FILTER opcom*\]*
  *\[*MESSAGE msg*\]*
  *\[*IGNORING CONVERSION ERRORS*\]*
  *\[*REPLACEMENT CHARACTER rc*\]*.

Effect

Opens the file specified in dset on the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry").

Additions

-   [FOR *{* INPUT *|* OUTPUT *|* APPENDING *|* UPDATE *}*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_access.htm)
    Opens the file for reading, writing, appending, or changing.
    

-   [IN *\[*LEGACY*\]* *{* BINARY *|* TEXT *}* MODE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_mode.htm)
    Opens the file in normal binary or text mode, or in legacy binary or text mode.
    

-   [ENCODING *{*DEFAULT*|*UTF-8*|*NON-UNICODE*}*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_mode.htm)
    Determines in which character representation the content of the file is handled:
    [DEFAULT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_encoding.htm) - [UTF-8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf8_glosry.htm "Glossary Entry") in [Unicode systems](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_system_glosry.htm "Glossary Entry"); no conversion in non-Unicode systems.
    [UTF-8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_encoding.htm) - [UTF-8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf8_glosry.htm "Glossary Entry").
    [NON-UNICODE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_encoding.htm) - [Code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry") in accordance with the non-Unicode [text environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_environment_glosry.htm "Glossary Entry") in Unicode systems; no conversion in non-Unicode systems.
    

-   [WITH *{*NATIVE*|*SMART*|*UNIX*|*WINDOWS*}* LINEFEED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_linefeed.htm)
    Determines the end-of-line selection for text files.
    

-   [SKIPPING*|*WITH BYTE-ORDER MARK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_encoding.htm)
    Controls handling of byte order mark in UTF-8 text files.
    

-   [*{*BIG*|*LITTLE*}* ENDIAN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_endian.htm)
    Determines in which byte order numeric data objects in the file are handled.
    

-   [CODE PAGE cp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_code_page.htm)
    Specifies that character-like data objects in the file are handled in accordance with the code page specified in cp.
    

-   [AT POSITION pos](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_position.htm)
    Sets the file pointer to the position specified in pos.
    

-   [TYPE attr](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_os_addition.htm)
    Either sets operating-system-specific parameters for the file or controls the end-of-line selection for a text file.
    

-   [FILTER opcom](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_os_addition.htm)
    Transfers a statement to the operating system.
    

-   [MESSAGE msg](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_error_handling.htm)
    If an error occurs, returns the associated operating system [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry") in msg.
    

-   [IGNORING CONVERSION ERRORS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_error_handling.htm)
    Suppresses an exception if a conversion error occurs.
    

-   [REPLACEMENT CHARACTER rc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_error_handling.htm)
    Specifies a replacement character for non-convertible characters in rc. If nothing is specified, "#" is used.