  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for ABAP Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Further%20Developments%20in%20ABAP%20Release%204.6A%2C%20ABENNEWS-46-ENTWICKLUNGEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Further Developments in ABAP Release 4.6A

[1\. New Event Keyword LOAD-OF-PROGRAM](#!ABAP_MODIFICATION_1@1@)
[2\. Typing of Ranges Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Increased Precision in BCD Arithmetic](#!ABAP_MODIFICATION_3@3@)
[4\. F1 Help for Dynamic Field Access](#!ABAP_MODIFICATION_4@4@)
[5\. More Local and Global Data Descriptions](#!ABAP_MODIFICATION_5@5@)
[6\. More Literals and Memory for Literals](#!ABAP_MODIFICATION_6@6@)
[7\. Improvements in Documentation](#!ABAP_MODIFICATION_7@7@)

Modification 1   

New Event Keyword LOAD-OF-PROGRAM

[LOAD-OF-PROGRAMM](javascript:call_link\('abapload-of-program.htm'\)) is an event keyword which processes an event immediately before execution of the first load statement. For example, when a function module is called, the statements following LOAD-OF-PROGRAM are executed first after the function pool has been loaded into the program memory. It is then no longer necessary to know the order of execution.

This statement has the same effect as a program constructor, similar to the class constructor in ABAP Objects, which replaces the event LOAD-OF-PROGRAM in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") and global classes.

Modification 2   

Typing of Ranges Tables

The addition RANGE of the statements [DATA](javascript:call_link\('abapdata.htm'\)), [STATICS](javascript:call_link\('abapstatics.htm'\)), and [TYPES](javascript:call_link\('abaptypes.htm'\)) defines an internal table with the type [RANGES](javascript:call_link\('abapranges.htm'\)). This addition can also be used for the definitions in classes and is supported in ABAP Dictionary.

Modification 3   

Increased Precision in BCD Arithmetic

In rare cases in fixed point arithmetic, calculations were performed with a precision of 15 instead of 31 places. This meant that fields with many [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") were sometimes rounded off. Now calculations are always performed to an accuracy of 31 places.

This change has resulted in a significant reduction of the computing time required for multiplication and division.

Modification 4   

F1 Help for Dynamic Field Access

Previously, F1 help in [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") and lists was not available for fields addressed using [field symbols](javascript:call_link\('abapfield-symbols.htm'\)) or [ASSIGN COMPONENT ...](javascript:call_link\('abapassign_dynamic_components.htm'\)), although the assigned field was defined in ABAP Dictionary. Online help is now available for all fields that have a HELP ID.

Modification 5   

More Local and Global Data Descriptions

Previously, a 16 KB address space was available for global and local static descriptions. Now 16 KB each are reserved separately for the local definitions of subroutines, functions, and methods to reduce the workload in the address space for global descriptions.

Modification 6   

More Literals and Memory for Literals

The address space for [literals](javascript:call_link\('abenliteral.htm'\)) has also been expanded so that 64 KB are now available for the different literals. The length of the individual literals is limited only by operating system restrictions. Previously, a maximum of 64 KB was available for all literals together (indexes and texts).

Modification 7   

Improvements in Documentation

The documentation has been improved as follows:

-   Standardized presentation in the keyword documentation and the application help BC - ABAP Programming
-   Extensive documentation of dynpros and the structure SYST in the application help
-   ABAP statement reference in the application help
-   Detailed visualization of overviews by using figures in the application help
-   Links from the keyword documentation to the corresponding sections of the application help for each ABAP statement
-   All example programs for display, execution, and debugging available in transaction ABAPDOCU.