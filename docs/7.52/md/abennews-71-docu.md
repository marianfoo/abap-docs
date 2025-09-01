  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-71.htm) → 

ABAP Keyword Documentation in Release 7.0 EhP2

For release 7.0 EhP2, the ABAP keyword documentation has been extended as follows:

[1\. ABAP examples](#!ABAP_MODIFICATION_1@1@)

[2\. Searching in the documentation](#!ABAP_MODIFICATION_2@2@)

[3\. Syntax diagrams](#!ABAP_MODIFICATION_3@3@)

[4\. Downloading the documentation](#!ABAP_MODIFICATION_4@4@)

[5\. Standalone HTML versions of the documentation](#!ABAP_MODIFICATION_5@5@)

[6.F1 Help Hit List in ABAP Editor](#!ABAP_MODIFICATION_6@6@)

[7\. Printing the documentation](#!ABAP_MODIFICATION_7@7@)

[8\. Display language](#!ABAP_MODIFICATION_8@8@)

[9\. Improvements to internal performance](#!ABAP_MODIFICATION_9@9@)

Modification 1

ABAP Examples

The ABAP example library has been integrated into the ABAP keyword documentation. Executable example programs that until now have been called using transaction ABAPDOCU and are still valid, are now in the relevant topic of the tree structure of the ABAP keyword documentation and can be executed, debugged, or displayed in the corresponding editor from there. An alphabetical list of all the example programs can be found under [ABAP examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_examples.htm). The example programs are included in index searches of the ABAP keyword documentation. The ABAPDOCU transaction now displays the ABAP keyword documentation.

The ABAP keyword documentation search options now include an option to search within source code in example programs.

Modification 2

Searching in the Documentation

The access to the search options in ABAP keyword documentation has been improved:

-   An input window is permanently shown in the documentation display. This window replaces the toolbar functions used previously.
    

-   If Quick Search is chosen (or Enter), an index search is performed first, followed a full text search for the term entered.

-   If Extended Search is chosen, a dialog box appears where a search mode can be selected.

-   The source code of [ABAP examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_examples.htm) can now also be searched, as well as to using the existing index and full-text searches to search documentation text.
    
-   The display window of the search hit list now contains a function for opening the dialog box.
    

This dialog box allows new searches to be started in the hit list, without needing to return to the previous window.

Modification 3

Syntax Diagrams

The syntax diagrams for the ABAP keywords are now displayed in a completely new way. Selecting a language element in a syntax diagram displays the corresponding documentation.

If a syntax diagram can be displayed for a keyword, a selectable icon is displayed in the title.

Note

Support for interactive syntax diagrams is stopped in Release 7.51.

Modification 4

Downloading the Documentation

The existing option for creating an offline version of the ABAP keyword documentation has been expanded from SP02 to include the option of downloading nodes with subnodes.

With the previous offline version, all the documents of the ABAP keyword documentation are exported to individual HTML files that are managed by a separate tree display.

When nodes with subnodes are downloaded, the currently selected node, including subnodes, is exported into a single HTML file. Additional files are created only for possible displays. All the links work internally. If there is more than one node, an index is inserted at the beginning. By selecting the uppermost node, it is possible to download the entire ABAP keyword documentation into a file.

With both options, it is possible to specify whether the interactive examples are included in downloads.

When downloading to individual HTML files, it is possible to specify whether the new syntax diagrams are included. At selection, offline versions of the syntax diagrams are loaded into a subdirectory. These can then be selected using an icon as in the online version.

Modification 5

Standalone HTML Versions of the Documentation

From Release 7.0, EhP2, AS ABAP provides the following services to allow the ABAP keyword documentation to be used independently of SAP GUI:

-   The remote enabled function module ABAP\_DOCU\_GET\_HTML returns documents of the ABAP keyword documentation as HTML files. Either search terms can be passed to the parameter QUERY or the names of documents to the parameter OBJECT; passing "\*" to OBJECT results in the tree-like documentation structure being sent.
    Example:
    Refer to the program ABAP\_DOCU\_REMOTE\_CALL. The loaded files are displayed here using the CL\_ABAP\_BROWSER class.
    
-   Under the node "/sap/public/bc/abap/docu" in transaction SICF, a service is provided to call the ABAP keyword documentation from the Web. On the initial screen, the tree structure of the documentation can be displayed or searches performed. The services "/sap/public/bc/abap/docu" and "/sap/bc/abap/docu" must be activated in transaction SICF. This version can also be used as a provider for OpenSearch.
    Example:
    Refer to the program ABAP\_DOCU\_HTTP\_CALL.
    

Modification 6

F1 Help Hit List in ABAP Editor

When the F1 help for keywords is called, the hit list that uses the new ABAP Front-End Editor is more specific than the one that uses the old ABAP Editor. After selecting an operand, the search in the new ABAP Editor evaluates the adjacent ABAP words. From Release 7.0 EhP2, the selection of all operands produces a hit list. Previously, selecting \=, +, and so on, displayed a dialog box with an input field. The latter also applies to the old ABAP Editor.

Modification 7

Printing the Documentation

From Release 7.0 EhP2, all documents for printing are formatted in HTML. The individual executable example programs from [ABAP examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_examples.htm) and the [ABAP glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) can now also be printed. In addition, tabular displays are now aligned correctly on printouts.

Modification 8

Display Languages

From Release 7.0 EhP2, the language in which the documentation is displayed (English or German) can be configured by user, independently of the logon language. Any German developers developing in English, for example, can now display the most up-to-date documentation in its original language, German.

This user-specific setting is made when the documentation is displayed using the Settings for Display Window function, or in the initial window of the transaction ABAPHELP; the system remembers this setting for each user. Until now, the language setting in the initial screen of ABAPHELP only applied to what was currently being viewed.

Modification 9

Improvements to Internal Performance

From Release 7.0, EhP2, large and non-modifiable datasets of the ABAP keyword documentation, such as the ABAP Index or the ABAP Glossary, are downloaded into the shared memory. Here they are available to all users of the documentation. This produces improvements in performance with respect to memory use and also improvements in downloading the documentation.