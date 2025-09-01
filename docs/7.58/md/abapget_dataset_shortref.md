  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20DATASET%2C%20ABAPGET_DATASET_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET DATASET - Short Reference

[Reference](javascript:call_link\('abapget_dataset.htm'\))

Syntax

GET DATASET dset *\[*POSITION pos*\]* *\[*ATTRIBUTES attr*\]*.

Effect

Defines the attributes of a file opened using OPEN DATASET.

Additions   

-   POSITION pos
    Gets the current position of the file pointer in pos.
-   ATTRIBUTES attr
    Gets the attributes of the file in the structure attr of the type DSET\_ATTRIBUTES.