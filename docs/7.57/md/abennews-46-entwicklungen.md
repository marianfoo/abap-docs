  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-4.htm) →  [News for Release 4.6A](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46a.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Developments in Release 4.6A, ABENNEWS-46-ENTWICKLUNGEN, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Further Developments in Release 4.6A

[1\. New Event Keyword LOAD-OF-PROGRAM](#!ABAP_MODIFICATION_1@1@)
[2\. Typing of Ranges Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Increased Precision in BCD Arithmetic](#!ABAP_MODIFICATION_3@3@)
[4\. F1 Help for Dynamic Field Access](#!ABAP_MODIFICATION_4@4@)
[5\. More Local and Global Data Descriptions](#!ABAP_MODIFICATION_5@5@)
[6\. More Literals and Memory for Literals](#!ABAP_MODIFICATION_6@6@)
[7\. Improvements in Documentation](#!ABAP_MODIFICATION_7@7@)

Modification 1   

New Event Keyword LOAD-OF-PROGRAM

[LOAD-OF-PROGRAMM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) is an event keyword which processes an event immediately before execution of the first load statement. For example, when a function module is called, the statements following LOAD-OF-PROGRAM are executed first after the function pool has been loaded into the program memory. It is then no longer necessary to know the order of execution.

This statement has the same effect as a program constructor, similar to the class constructor in ABAP Objects, which replaces the event LOAD-OF-PROGRAM in [class pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry") and global classes.

Modification 2   

Typing of Ranges Tables

The addition RANGE of the statements [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm), [STATICS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstatics.htm), and [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm) defines an internal table with the type [RANGES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapranges.htm). This addition can also be used for the definitions in classes and is supported in ABAP Dictionary.

Modification 3   

Increased Precision in BCD Arithmetic

In rare cases in fixed point arithmetic, calculations were performed with a precision of 15 instead of 31 places. This meant that fields with many [decimal places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_place_glosry.htm "Glossary Entry") were sometimes rounded off. Now calculations are always performed to an accuracy of 31 places.

This change has resulted in a significant reduction of the computing time required for multiplication and division.

Modification 4   

F1 Help for Dynamic Field Access

Previously, F1 help in [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") and lists was not available for fields addressed using [field symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfield-symbols.htm) or [ASSIGN COMPONENT ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_dynamic_components.htm), although the assigned field was defined in ABAP Dictionary. Online help is now available for all fields that have a HELP ID.

Modification 5   

More Local and Global Data Descriptions

Previously, a 16 KB address space was available for global and local static descriptions. Now 16 KB each are reserved separately for the local definitions of subroutines, functions, and methods to reduce the workload in the address space for global descriptions.

Modification 6   

More Literals and Memory for Literals

The address space for [literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenliteral.htm) has also been expanded so that 64 KB are now available for the different literals. The length of the individual literals is limited only by operating system restrictions. Previously, a maximum of 64 KB was available for all literals together (indexes and texts).

Modification 7   

Improvements in Documentation

The documentation has been improved as follows:

-   Standardized presentation in the keyword documentation and the application help BC - ABAP Programming

-   Extensive documentation of dynpros and the structure SYST in the application help

-   ABAP statement reference in the application help

-   Detailed visualization of overviews by using figures in the application help

-   Links from the keyword documentation to the corresponding sections of the application help for each ABAP statement

-   All example programs for display, execution, and debugging available in transaction ABAPDOCU.