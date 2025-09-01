  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for ABAP Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20List%20Processing%20in%20ABAP%20Release%206.10%2C%20ABENNEWS-610-LISTEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

List Processing in ABAP Release 6.10

[1\. Standard Spool Dialog Box Simplified](#!ABAP_MODIFICATION_1@1@)
[2\. New Addition FRAMES OFF of the Statement FORMAT](#!ABAP_MODIFICATION_2@2@)
[3\. Extended Options for Configuration of the Spool Dialog Box](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Standard Spool Dialog Box Simplified

The spool dialog box has been reduced to the most important spool parameters. Further parameters can be selected on the following Spool Request Attributes screen. The user can apply options from this screen to the initial screen by double-clicking a parameter. Further spool options are available for printers with an active list driver on the Printed Page tab.

Modification 2   

New Addition FRAMES OFF of the Statement FORMAT

The addition [FRAMES OFF](javascript:call_link\('abapformat.htm'\)) prevents the minus (-) and vertical bar (|) characters from being transformed to parts of frames, if adjacent. In archiving, this addition also ensures that a line consisting of minus signs is saved unchanged and in ASCII format.

Modification 3   

Extended Options for Configuration of the Spool Dialog Box

The program RSPRIPARADMIN can be used to make spool settings that apply to all users.