  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  O

OPEN DATASET - Short Reference

[Reference](javascript:call_link\('abapopen_dataset.htm'\))

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

Opens the file specified in dset on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry").

Additions

-   [FOR *{* INPUT *|* OUTPUT *|* APPENDING *|* UPDATE *}*](javascript:call_link\('abapopen_dataset_access.htm'\))
    Opens the file for reading, writing, appending, or changing.
-   [IN *\[*LEGACY*\]* *{* BINARY *|* TEXT *}* MODE](javascript:call_link\('abapopen_dataset_mode.htm'\))
    Opens the file in regular binary or text mode, or in legacy binary or text mode.
-   [ENCODING *{*DEFAULT*|*UTF-8*|*NON-UNICODE*}*](javascript:call_link\('abapopen_dataset_mode.htm'\))
    Determines in which character representation the content of the file is handled:
    [DEFAULT](javascript:call_link\('abapopen_dataset_encoding.htm'\)) - [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry") in [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"); no conversion in non-Unicode systems.
    [UTF-8](javascript:call_link\('abapopen_dataset_encoding.htm'\)) - [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry").
    [NON-UNICODE](javascript:call_link\('abapopen_dataset_encoding.htm'\)) - [Code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") in accordance with the non-Unicode [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") in Unicode systems; no conversion in non-Unicode systems.
-   [WITH *{*NATIVE*|*SMART*|*UNIX*|*WINDOWS*}* LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\))
    Determines the end-of-line marker for text files.
-   [SKIPPING*|*WITH BYTE-ORDER MARK](javascript:call_link\('abapopen_dataset_encoding.htm'\))
    Controls handling of byte order mark in UTF-8 text files.
-   [*{*BIG*|*LITTLE*}* ENDIAN](javascript:call_link\('abapopen_dataset_endian.htm'\))
    Determines in which byte order numeric data objects in the file are handled.
-   [CODE PAGE cp](javascript:call_link\('abapopen_dataset_code_page.htm'\))
    Specifies that character-like data objects in the file are handled in accordance with the code page specified in cp.
-   [AT POSITION pos](javascript:call_link\('abapopen_dataset_position.htm'\))
    Sets the file pointer to the position specified in pos.
-   [TYPE attr](javascript:call_link\('abapopen_dataset_os_addition.htm'\))
    Either sets operating-system-specific parameters for the file or controls the end-of-line selection for a text file.
-   [FILTER opcom](javascript:call_link\('abapopen_dataset_os_addition.htm'\))
    Transfers a statement to the operating system.
-   [MESSAGE msg](javascript:call_link\('abapopen_dataset_error_handling.htm'\))
    If an error occurs, returns the associated operating system [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") in msg.
-   [IGNORING CONVERSION ERRORS](javascript:call_link\('abapopen_dataset_error_handling.htm'\))
    Suppresses an exception if a conversion error occurs.
-   [REPLACEMENT CHARACTER rc](javascript:call_link\('abapopen_dataset_error_handling.htm'\))
    Specifies a replacement character for non-convertible characters in rc. If nothing is specified, "#" is used.