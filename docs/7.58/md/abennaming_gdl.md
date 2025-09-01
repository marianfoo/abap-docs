  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_style_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Naming%2C%20ABENNAMING_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Naming

The naming of the repository objects defined outside of a program and of the entities declared within the program (such as data types, data objects, and procedures) is of vital importance for understanding and editing the program. All names used must be readable, easy to learn, and appropriate. You can meet these requirements by using meaningful names. It is also important to avoid naming conflicts.

-   [Language of Names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenname_langu_guidl.htm "Guideline")
-   [Descriptive Names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentelling_names_guidl.htm "Guideline")
-   [Names of Repository Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennames_repos_obj_guidl.htm "Guideline")
-   [Program-Internal Names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprog_intern_names_guidl.htm "Guideline")
-   [Names of Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstruc_comp_names_guidl.htm "Guideline")

These guidelines deliberately use the term naming and not naming conventions. The term programming guidelines is frequently equated with naming conventions. Many of the current programming guidelines are mainly concerned with the definition of prefixes and suffixes, which are more or less meaningful. However, we pursue a different approach here. Part of these guidelines is rightly dedicated to the discussion of meaningful names. However, this discussion does not represent the core of these guidelines.

A maintenance organization is responsible for maintaining monolithic ABAP applications that have evolved over time and that may include complex procedures without a clearly defined task, large quantities of global data objects and cryptic/misleading names. For this type of organization, the appeal for strict naming conventions with standardized prefixes and suffixes may be understandable. However, the current programming guidelines are designed to support the new development of robust ABAP programs, which can be developed and maintained cost-efficiently. Consequently, it would be wrong to insist on naming conventions (for new developments) that address problems in older code, which are excluded from the outset anyway, if the programming meets current standards.

The rules on naming listed below meet the requirements of modern ABAP development. The only disadvantage is that it is difficult to use automatic checks, to monitor whether these requirements are adhered to. Our rules address human readers (and not automated test tools), who want to understand ABAP programs and eliminate ambiguous elements as quickly as possible. With regard to older code, we recommend refactoring based on the basic guidelines presented here. This enables you to get down to the root of maintenance problems. If you simply try to retroactively change names in line with technical naming conventions, you are only attempting to cure the symptoms and not the problem itself.

Continue
[Language of Names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenname_langu_guidl.htm)
[Descriptive Names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentelling_names_guidl.htm)
[Names of Repository Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennames_repos_obj_guidl.htm)
[Program-Internal Names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprog_intern_names_guidl.htm)
[Names of Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstruc_comp_names_guidl.htm)