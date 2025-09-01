  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Keyword Documentation in Release 7.0, ABENNEWS-70-DOCU, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Keyword Documentation in Release 7.0

In Release 7.0, the ABAP keyword documentation has been expanded as follows:

[1\. Full Text Search](#!ABAP_MODIFICATION_1@1@)
[2\. Subject Search](#!ABAP_MODIFICATION_2@2@)
[3\. Diagrams](#!ABAP_MODIFICATION_3@3@)
[4\. Language](#!ABAP_MODIFICATION_4@4@)
[5\. List of ABAP Words](#!ABAP_MODIFICATION_5@5@)
[6\. Terminology Change for Narrowing and Widening Casts](#!ABAP_MODIFICATION_6@6@)
[7\. Adjustment of Font Size](#!ABAP_MODIFICATION_7@7@)

Modification 1   

Full Text Search

Considerable improvements have been made to the performance of the full text search in the ABAP keyword documentation. The occurrences found by the full text search are now marked in the display. As before, the full text search can be called from the display window of the documentation. It is also available on the initial screens for the documentation (ABAP Editor, transaction ABAPHELP) as an alternative to the index search.

Modification 2   

Subject Search

An alphabetical [subject directory](javascript:call_link\('abenabap_subjects.htm'\)) has been added to the ABAP keyword documentation. The index search now evaluates this directory in addition to the [ABAP index](javascript:call_link\('abenabap_index.htm'\)) and [ABAP glossary](javascript:call_link\('abenabap_glossary.htm'\)).

Modification 3   

Diagrams

Using access to the MIME repository, diagrams can now be displayed in the ABAP keyword documentation.

Example: [Sessions and Memory Areas](javascript:call_link\('abenmemory_organization.htm'\))

Modification 4   

Language

It is now possible to select the language in which the documentation is displayed on the initial screen of the transaction ABAPHELP. The user can choose between the logon language, English, and German. The logon language is the standard setting. When the ABAP keyword documentation is called from ABAP Editor, the logon language is always used.

Modification 5   

List of ABAP Words

The document [ABAP words](javascript:call_link\('abenabap_words.htm'\)) contains a list of all names reserved in ABAP, except for those that consist of special characters. From this list, the user can navigate directly to the occurrences.

Modification 6   

Terminology Change for Narrowing and Widening Casts

The use of the terms [narrowing cast](javascript:call_link\('abennarrowing_cast_glosry.htm'\) "Glossary Entry") and [widening cast](javascript:call_link\('abenwidening_cast_glosry.htm'\) "Glossary Entry"), which refers to the view that a reference variable offers to an object, has been modified to reflect more general usage, which refers to the value set covered by a variable. Now the unambiguous terms [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") and [downcast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") are now used almost everywhere.

Modification 7   

Adjustment of Font Size

If the font size is changed when adjusting the local layout in the SAP GUI, this also applies to the display of the ABAP keyword documentation. Previously, only changes in color affected the ABAP keyword documentation. Within a user session, the GUI font size dependency can be deactivated by setting the standard font size.