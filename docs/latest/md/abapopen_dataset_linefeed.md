  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset.htm) →  [OPEN DATASET, mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_mode.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OPEN%20DATASET%2C%20WITH%20LINEFEED%2C%20ABAPOPEN_DATASET_LINEFEED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OPEN DATASET, WITH LINEFEED

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_shortref.htm)

Syntax

... WITH *{* NATIVE
         *|* SMART
         *|* UNIX
         *|* WINDOWS *}* LINEFEED ...

Alternatives:

[1\. ... WITH NATIVE LINEFEED](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... WITH SMART LINEFEED](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... WITH UNIX LINEFEED](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... WITH WINDOWS LINEFEED](#!ABAP_ALTERNATIVE_4@4@)

Effect

These additions determine which end-of-line marker is used for [text files](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_file_glosry.htm "Glossary Entry") or [legacy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text files. If these additions are used, the [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/NTfmode is ignored. The two values UNIX or NT cannot both be specified in the addition [TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_os_addition.htm) at the same time.

If neither of these additions is used, the end-of-line marker is determined as follows, depending on the operating system of the current [AS instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry") [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry"):

-   The end-of-line marker for Unix is LF. On Unix, OS/390, and IBM i5/OS (previously known as OS/400), only LF is used for reading and writing.
-   The end-of-line marker for MS Windows is CRLF. On MS Windows, however, the values of the [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/NTfmode can also be used to specify whether new files are to be handled according to Unix conventions or Windows conventions. If the profile parameter has the value b, the Unix end-of-line marker LF is used. If the profile parameter has the value t or is initial, the Windows end-of-line marker CRLF is used. The setting in the profile parameter can be overridden with the addition [TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_os_addition.htm) and the value UNIX or NT. If an existing file is opened without the addition TYPE, this file is searched for the first end-of-line marker (LF or CRLF), and this is used for the entire file. If no end-of-line marker is found, the profile parameter is used. This applies particularly if an existing file is completely overwritten with [FOR OUTPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm).

If an addition WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED is used, this setting can be changed for the open file using the statement [SET DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_dataset.htm). If neither of the additions is used, the end-of-line marker cannot be changed using SET DATASET either.

Hints

-   Without the use of an addition WITH LINEFEED, the end-of-line marker is dependent on various implicit factors such as the operating system of the current AS instance [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry"), a profile parameter, and line end markings that are already used. For this reason, the explicit use of WITH LINEFEED is recommended, which makes the use of the addition [TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_os_addition.htm) for setting the end-of-line marker obsolete.
-   The end-of-line marker that is currently used can be determined for every open file using [GET DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_dataset.htm).

Alternative 1   

... WITH NATIVE LINEFEED

Effect

This addition defines the end-of-line marker independently of the [access type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm) in accordance with the operating system of the current AS instance [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry"), in other words LF for Unix, OS/390, and IBM i5/OS (previously known as OS/400), and CRLF for MS Windows.

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_mode.htm), the [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") of the end-of-line marker must be available or be written according to this code page.

Hint

The addition WITH NATIVE LINEFEED is intended for processing files on a host computer that can also be accessed by other means. The addition receives the appropriate end-of-line marker without the program needing to know the operating system.

Example

The following example shows the UTF 8 representation of the current line end marking. Comparisons with the corresponding [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") in [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_template_glosry.htm "Glossary Entry") ensure that it is either LF or CRLF.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH NATIVE LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\n| ) OR
       xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\r\\n| ).

Alternative 2   

... WITH SMART LINEFEED

Effect

This addition depends on the [access type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm):

-   In files that are opened for reading using FOR INPUT, both LF and CRLF are interpreted as an end-of-line marker. When opening an EBCDIC file with the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_mode.htm), the corresponding ASCII [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") are recognized alongside the LF, CRLF, and EBCDIC control characters. In addition, the EBCDIC control characters NL (line separator) is also interpreted as an end-of-line marker.
-   In files opened for appending or changing with FOR APPENDING or FOR UPDATE, the program searches for an end-of-line marker that is already used in the file. The end of the file is identified first. If no end-of-line marker is found here, a certain number of characters at the beginning is analyzed. If an end-of-line marker is found, this is used when writing to the file. This is also affected by the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_mode.htm). For example, ASCII end-of-line markers are recognized and used in a file opened with EBCDIC, but not the other way round. If no end-of-line marker is found or no search is possible, for example, if the file is opened with the addition [FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_os_addition.htm), the end-of-line marker is defined in accordance with the operating system of the current AS instance [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry"), as with the addition WITH NATIVE LINEFEED.
-   In files opened for writing using FOR OUTPUT, the end-of-line marker is determined in accordance with the operating system the current AS instance [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry"), as with the addition WITH NATIVE LINEFEED.

Hint

The addition WITH SMART LINEFEED is intended for the generic processing of files in heterogeneous environments. The end-of-line marker is recognized and set for different formats. Using this addition is the best solution for most use cases.

Example

Writing of a text file with the end-of-line marker CRLF. Using the addition WITH SMART LINEFEED when opening to read, this marking is also detected on platforms that expect LF.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH WINDOWS LINEFEED.
TRANSFER 'abc' TO dset.
TRANSFER 'def' TO dset.
CLOSE DATASET dset.
DATA str TYPE string.
OPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT
                  WITH SMART LINEFEED.
DATA out TYPE string.
WHILE sy-subrc = 0.
  READ DATASET dset INTO str.
  out &&= str.
ENDWHILE.
CLOSE DATASET dset.
cl\_demo\_output=>display( out ).
DELETE DATASET dset.

Alternative 3   

... WITH UNIX LINEFEED

Effect

The end-of-line marker is set to LF regardless of the [access type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm) and operating system of the [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance.

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_mode.htm), the [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") for the end-of-line marker must exist or be written according to this code page.

Hint

The addition WITH UNIX LINEFEED is intended for processing Unix files in which the specific end-of-line markers are to be retained, even if the operating system of the current AS instance [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") is [MS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") Windows.

Example

The following example sets the end-of-line marker to LF. This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_template_glosry.htm "Glossary Entry").

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH UNIX LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\n| ).

Alternative 4   

... WITH WINDOWS LINEFEED

Effect

The end-of-line marker is set to CRLF regardless of the [access type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm) and operating system of the current AS instance [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry").

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_mode.htm), the [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry") for the end-of-line marker must exist or be written according to this code page.

Hint

The addition WITH WINDOWS LINEFEED is intended for use with MS Windows files in which the specific end-of-line marker is to be retained, even if the operating system of the current AS instance [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") is Unix, OS/390, or IBM i5/OS (previously known as OS/400).

Example

The following example sets the line end marking to CRLF. This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_template_glosry.htm "Glossary Entry").

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT
                  WITH WINDOWS LINEFEED.
TRANSFER 'abc' TO dset.
CLOSE DATASET dset.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
SHIFT xstr BY 3 PLACES LEFT IN BYTE MODE.
cl\_demo\_output=>display( xstr ).
DELETE DATASET dset.
ASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\r\\n| ).