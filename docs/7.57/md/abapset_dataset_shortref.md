  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET DATASET, ABAPSET_DATASET_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

SET DATASET - Short Reference

[Reference](javascript:call_link\('abapset_dataset.htm'\))

Syntax

SET DATASET dest *\[*POSITION *{*pos*|**{*END OF FILE*}**}**\]*
                 *\[*ATTRIBUTES attr*\]*.

Effect

Determines the attributes of a file opened using OPEN DATASET.

Additions   

-   POSITION *{*pos*|**{*END OF FILE*}**}*
    Specifies the position of the file pointer as pos or as the end of the file.
-   ATTRIBUTES attr
    Specifies the attributes of the file in the structure attr of type DSET\_ATTRIBUTES.