  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET DATASET, ABAPGET_DATASET_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

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