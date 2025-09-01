  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-6.htm) →  [Changes in Release 6.10](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-610.htm) → 

List Processing in Release 6.10

[1\. Standard spool dialog simplified](#!ABAP_MODIFICATION_1@1@)
[2\. New addition FRAMES OFF of the statement FORMAT](#!ABAP_MODIFICATION_2@2@)

Modification 1

Standard Spool Dialog Box Simplified

The spool dialog box has been reduced to the most important spool parameters. Further parameters can be selected on the following Spool Request Attributes screen. The user can apply options from this screen to the initial screen by double-clicking a parameter. Further spool options are available for printers with an active list driver on the Printed Page tab.

Modification 2

New Addition FRAMES OFF of the Statement FORMAT

The addition [FRAMES OFF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapformat.htm) prevents the minus (-) and vertical bar (|) characters from being transformed to parts of frames, if adjacent. In archiving, this addition also ensures that a line consisting of minus signs is saved unchanged and in ASCII format.

Modification 3

Extended Options for Configuration of the Spool Dialog Box

The program RSPRIPARADMIN can be used to make spool settings that apply to all users.