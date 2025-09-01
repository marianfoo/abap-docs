# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Structure and Style / Naming

Included pages: 6


### abennaming_gdl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Naming%2C%20ABENNAMING_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Naming

The naming of the repository objects defined outside of a program and of the entities declared within the program (such as data types, data objects, and procedures) is of vital importance for understanding and editing the program. All names used must be readable, easy to learn, and appropriate. You can meet these requirements by using meaningful names. It is also important to avoid naming conflicts.

-   [Language of Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_langu_guidl.htm "Guideline")
-   [Descriptive Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm "Guideline")
-   [Names of Repository Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennames_repos_obj_guidl.htm "Guideline")
-   [Program-Internal Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprog_intern_names_guidl.htm "Guideline")
-   [Names of Structure Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstruc_comp_names_guidl.htm "Guideline")

These guidelines deliberately use the term naming and not naming conventions. The term programming guidelines is frequently equated with naming conventions. Many of the current programming guidelines are mainly concerned with the definition of prefixes and suffixes, which are more or less meaningful. However, we pursue a different approach here. Part of these guidelines is rightly dedicated to the discussion of meaningful names. However, this discussion does not represent the core of these guidelines.

A maintenance organization is responsible for maintaining monolithic ABAP applications that have evolved over time and that may include complex procedures without a clearly defined task, large quantities of global data objects and cryptic/misleading names. For this type of organization, the appeal for strict naming conventions with standardized prefixes and suffixes may be understandable. However, the current programming guidelines are designed to support the new development of robust ABAP programs, which can be developed and maintained cost-efficiently. Consequently, it would be wrong to insist on naming conventions (for new developments) that address problems in older code, which are excluded from the outset anyway, if the programming meets current standards.

The rules on naming listed below meet the requirements of modern ABAP development. The only disadvantage is that it is difficult to use automatic checks, to monitor whether these requirements are adhered to. Our rules address human readers (and not automated test tools), who want to understand ABAP programs and eliminate ambiguous elements as quickly as possible. With regard to older code, we recommend refactoring based on the basic guidelines presented here. This enables you to get down to the root of maintenance problems. If you simply try to retroactively change names in line with technical naming conventions, you are only attempting to cure the symptoms and not the problem itself.

Continue
[Language of Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_langu_guidl.htm)
[Descriptive Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm)
[Names of Repository Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennames_repos_obj_guidl.htm)
[Program-Internal Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprog_intern_names_guidl.htm)
[Names of Structure Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstruc_comp_names_guidl.htm)


### abenname_langu_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Language%20of%20Names%2C%20ABENNAME_LANGU_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Language of Names

Background   

The natural language that has established itself worldwide for computer programming is English. This is because the language elements in all significant programming languages have been taken from English and their syntax based on English grammar. ABAP is no exception. In fact, efforts have been made to guarantee correct English by giving additions of related statements different names, even if they have the same meaning. Well-known examples include the (now obsolete) additions VARYING and VARY of the statements DO and WHILE. Here, ABAP can even be viewed as a subset of the English language.

Rule   

Use English names

Give your repository objects and your local program objects names that use English words only

Details   

Using names in a language other than English looks unnatural (and inelegant) in programming languages whose own language elements are all in English. As well as this, English names make the source code accessible to as wide an audience as possible. Finally, using a different language throughout your code would be difficult due to the large number of English technical terms used in today's IT environment.

In instances where British and American spelling differ, use the American spelling. This is often shorter and more commonly used in IT.

Note

This rule applies regardless of the [original language chosen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoriginal_langu_guidl.htm "Guideline").

Bad Example

One of the most notorious examples of non-English names in ABAP is the component UZEIT of the structure SYST, plus its data element SYUZEIT. All other components (with the exception of the equally notorious DATUM (for date) and MANDT (for client)) are English terms or abbreviations.


### abentelling_names_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Descriptive%20Names%2C%20ABENTELLING_NAMES_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Descriptive Names

Background   

A name can include technical and semantic information:

-   Technical information can be very versatile. Examples of options in a data object: data type, declaration context, whether a procedure parameter is passed by value or by reference.
-   The semantic information indicates the purpose of classes or data types, the content of data objects, how methods work, and so on.

The technical information about a repository object or internal program entity can be viewed directly in ABAP Workbench. This information is also displayed in tooltips or can be displayed with a simple double-click. However, in contrast to purely technical type information, the semantics of a variable are more difficult to identify without the relevant information in the name.

Rule   

Use descriptive names

Always choose names that include the semantic information required for your context and that also easy to understand.

Details   

The aim is to assign descriptive and self-documenting names. You should always follow a problem-oriented approach instead of an implementation-oriented approach. For example, a truth value should not be named flag. Instead it should have a name that indicates its meaning, such as is\_checked.

When you select a descriptive, problem-oriented name, you should consider the following aspects in particular:

-   Appropriate use of nouns, verbs, and adjectives
-   Meaningful use of abbreviations
-   Appropriate separation of name components

These points are discussed in detail in the following sections. The purely technical information for a named object can be displayed quickly and easily, using double-click navigation in ABAP Workbench. Therefore, this information can be omitted from names and semantic information can be used in names instead.

Any organizations (within SAP or external) that want to specify technical information in addition to semantic information in names, can define their own naming conventions that are based on our semantic rules. However, we believe that encoding technical properties in names is not suitable for making ABAP programs (developed according to the present guidelines) easier to understand and maintain. This may be different in the context of other programming languages with fewer types and less powerful development environments.

The use of nouns, verbs, and adjectives for naming depends on the entity that you want to name:

-   Packages and package interfaces
    
    A package comprises a collection of repository objects for a specific subject area. The package name can either consist of one or more singular nouns that describe the subject area (such as sabp\_compiler), or one or more plural nouns that indicate the contained objects (such as sabp\_analyze\_tools). Subpackages start with the name of the super package and contain suffixes that indicate the specialization. The name of a package interface starts with the name of the package. Information about visibility or restrictions to certain consumers are attached as an optional suffix. For example, \_public, stands for public interface and \_verification stands for interface to verification tools.
    
-   Data types, classes, and interfaces
    
    They denote categories of things and are therefore named using nouns, for example, cl\_abap\_conv\_codepage. The greater the degree of specialization, the greater the number of nouns required for description. This can result in longer, combined names, for instance, if\_abap\_string\_writer or cl\_abap\_xml\_name\_converter. If necessary, the name can be further specified with an additional adjective, as in if\_serializable\_object and cl\_abap\_weak\_reference. The name of a category is usually written in the singular form. Therefore, a class name should generally consist of singular nouns. However, there are many examples of deviations from this rule, such as cl\_abap\_ memory\_utilities. These classes often do not model a category but instead provide a hodgepodge of loosely related functions, usually in the form of exclusively static methods.
    
-   Associations
    
    An association refers to a semantic relationship between a start object and a target object. To make sure this relationship is unambiguous when an association is used in a path, you should prefix the association with the \_ character. This should be followed by a name that contains the name of the target object (in the case of non-reflexive associations).
    
-   Variable data objects and procedure parameters
    
    These describe properties and are therefore named with a noun, for instance, cl\_abap\_regex->pattern. Truth values are labeled using the is\_ prefix, which is consistent with natural language usage. If the property in question is a quantity (in ABAP, usually an internal table), this should be expressed using the plural form, for example in the interface parameter matches of the method cl\_abap\_matcher->find\_all.
    
-   Constants
    
    From a technical point of view, these are data objects with non-modifiable values at program runtime. They describe special, non-modifiable properties. Values of constants are described with nouns. They are distinguished by a specific property (such as minimum size, start value) expressed by one or more additional adjectives. Some examples are cl\_abap\_exceptional\_values=>decfloat34\_max and cl\_abap\_format=>o\_sign\_as\_postfix.
    
-   Events
    
    They are named using an expression in present perfect that describes their occurrence, for example, cl\_dd\_form\_element->button\_clicked and cl\_gui\_alv\_ tree->selection\_changed. In this example, the noun is abbreviated significantly (o for output format). More information about useful abbreviations can be found below.
    
-   Procedures
    
    New procedures are methods according to the [use ABAP objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") rule. Here, we distinguish between different cases:
    
    -   Event handlers are named after the corresponding event. They are assigned a prefix that identifies them as handler methods. In ABAP, the on\_ prefix has established itself. This is consistent with natural language use and clearly labels a method as an event handler. For the two event examples above, the names of the corresponding handler methods would be on\_ button\_clicked and on\_selection\_changed.
    -   The name of methods with a return value (functional methods) describes the returned result. The get\_ prefix is added to describe the task of the method. An example of this is the cl\_abap\_exceptional\_values=>get\_max\_value method. If the method returns a truth value, is\_ is used as a prefix instead of get\_. In ABAP, these get\_ methods are intended to identify the return value (by using a calculation, for example). Unlike in Java, for example, no own methods should be used to simply return attribute values. Instead you should use the [write-protected (READ-ONLY) attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenencapsulation_guidl.htm "Guideline") provided in ABAP.
    -   In all other cases, the name of a method describes an activity to be performed. Therefore, the method name is a verb, generally expressed in the imperative. Examples: cl\_abap\_regex->create\_ matcher and cl\_abap\_memory\_utilities=>do\_garbage\_collection. Methods used to set attributes are described using the relevant attribute, which is prefixed with set\_. Other procedures ([function modules and subroutines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) required to wrap method calls are named accordingly.
-   Exception
    
    Exceptions describe unexpected states. Technically they are classes. [Classic exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_exception_guidl.htm "Guideline") should no longer be used. Except for the prefix, the same considerations apply here. To distinguish exceptions from regular classes, they are assigned their [own prefix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennames_repos_obj_guidl.htm "Guideline") cx\_, provided that they are global exception classes. The name of an exception reflects the rejected state as clearly as possible, for instance, cx\_sy\_offset\_not\_allowed. If an entire hierarchy of exception classes exists, the names of the superclasses do not describe special exception situations. Instead they describe error categories (such as cx\_ sy\_data\_access\_error in this example).
    

You should avoid using abbreviations as name components wherever possible. Exceptions to this rule are abbreviations that are usually used instead of the complete term, such as GUI or XML. However, if the use of certain abbreviations cannot be avoided due to restricted space, you should initially use common abbreviations.

If no common abbreviation exists, you should proceed as follows: Vowels are omitted, unless they are the first letter of the word. They are of minor significance for the recognition value. If a word starts with a double vowel, both letters are kept for ease of recognition (for example, outbnd as the abbreviation for outbound instead of otbnd). If further abbreviations are required, you can replace double consonants with single consonants. Even after this step, the word is generally still recognizable.

An example of a poorly chosen abbreviation would be tstmp for timestamp. This abbreviation does not follow the above rules and is not intuitive. Readers would probably initially think of the possible components tst or tmp, which would remind them of test or temporary. However, an association with timestamp is initially very difficult to identify. Therefore, if you create abbreviations, you must ensure that the result is not similar to another, possibly more common abbreviation for a completely different term.

When you create abbreviations in a foreign language, you run the risk that the result represents a word or abbreviation with a completely different meaning. If in doubt, you should enter the abbreviation in a search engine to check it. For example, you only have four characters available and you want to use the word button. In this case, you should select the abbreviation bttn (following the abbreviation rules above), instead of the first four characters.

As a rule, name components should be visually separated using underscores in ABAP. This makes the names easier to read. Separating name components with uppercase and lowercase (common in languages with C-like syntax) is [not useful](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlower_upper_case_guidl.htm "Guideline") in ABAP. Underscores normally identify a name, because ABAP words are usually not formed this way. The only exceptions here are certain format options for string templates (such as SCIENTIFIC\_WITH\_LEADING\_ZERO), which can only occur within string expressions, and certain additions of SELECTION-SCREEN and WRITE.

You should not use digits as name components. They are often a sign of poorly selected names (because they are not very descriptive) or indicate the use of multiple individual variables, where the use of an internal table would make more sense. Exceptions include the interface parameters of procedures. Numbering similar parameters definitely makes sense here.

The use of digits to form phonetic names is also problematic because they require a degree of familiarization, and their meaning is not always obvious to everyone. A particularly bad use of digits is the abbreviation trmn8r for terminator. The commonly used 2 for to is the only justifiable exception here. This is often found as a name component in conversion procedures and can be interpreted easily (convert\_itf\_2\_html, for example).

Hints

-   You must always keep in mind that the information included in a name must remain valid. This applies to semantic information, but especially to technical information. If, for example, technical information included in a name changes due to a refactoring measure, all relevant names and their consumers must be modified. However, this is not an easy task in released interfaces. If in doubt, remember that names containing incorrect information are worse than names that do not provide any information at all. This is why programming guidelines exist that suggest only using nondescript names. Since semantic properties are less likely to change in the course of (further) development than technical properties, our predominantly semantic specifications for naming are relatively well safeguarded from program changes.
-   Less is often more. Our suggestions indicate how to compose names to include the information that is necessary in a context. They should only be used when the meaning of the name is not completely obvious from the context. For example:
    
    METHOD do\_something.
      CONSTANTS lcv\_maximum\_do\_loop\_count TYPE i VALUE 100.
      DO lcv\_maximum\_do\_loop\_count TIMES.
        ...
      ENDDO.
    ENDMETHOD.
    
    The long name lcv\_maximum\_do\_loop\_count is quite difficult to read. A method can only include a manageable [number of statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenproc_volume_guidl.htm "Guideline"). Therefore, you can select a very simple name in simple cases:
    
    METHOD do\_something.
      CONSTANTS nmax TYPE i VALUE 100.
      DO nmax TIMES.
        ...
      ENDDO.
    ENDMETHOD.
    
    A further example of where short names are useful is helper fields declared in [LET expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm).
    

Bad Example

The following source code shows the declaration of a class that executes arithmetic calculations. This should be understood as a synthetic naming example. Of course, in ABAP, it makes absolutely no sense to [wrap](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodularization_guidl.htm "Guideline") the arithmetic operations on elementary numeric data types using a class. The names of the class and its methods are unnecessarily short, and the names of the method parameters have no semantic meaning at all.

CLASS calcltr DEFINITION.
  PUBLIC SECTION.
    METHODS: add IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             sub IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             mul IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             div IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE f.
ENDCLASS.

Good Example

The following source code shows the same class as in the code above, but the names of the class and its methods are now spelled in full, and the names of the method parameters indicate their semantic meaning.

CLASS calculator DEFINITION.
  PUBLIC SECTION.
    METHODS: add IMPORTING addend1           TYPE i
                           addend2           TYPE i
                 RETURNING VALUE(sum)        TYPE i,
        subtract IMPORTING minuend           TYPE i
                           subtrahend        TYPE i
                 RETURNING VALUE(difference) TYPE i,
        multiply IMPORTING factor1           TYPE i
                           factor2           TYPE i
                 RETURNING VALUE(product)    TYPE i,
          divide IMPORTING dividend          TYPE i
                           divisor           TYPE i
                 RETURNING VALUE(quotient)   TYPE f.
ENDCLASS.

The addition and multiplication operands are commutative, which means you can use digits here to distinguish them.


### abennames_repos_obj_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Names%20of%20Repository%20Objects%2C%20ABENNAMES_REPOS_OBJ_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Names of Repository Objects

Background   

Repository objects are development objects maintained using the tools in ADT or ABAP Workbench. Each repository object is assigned to a package. Packages encapsulate the repository objects contained and use package interfaces to make objects available that should be usable outside the package. This complies with the [SoC principle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenseparation_concerns_guidl.htm "Guideline").

From a semantic point of view, packages represent a context for declarations, which is one level above the contexts of an ABAP program. Unlike the contexts of an ABAP program (programs, classes, procedures), a package does not generate a separate namespace.

The namespace for repository objects is defined as follows:

-   [Prefix namespace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprefix_name_space_glosry.htm "Glossary Entry")
    
    Development organizations (SAP departments, SAP partners, and SAP customers) can request a [prefix namespace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprefix_name_space_glosry.htm "Glossary Entry") for their own development systems. A prefix namespace has a name with at least 5 and a maximum of 10 digits, and the first digit and last digit must be slashes (/.../). After the namespace has been assigned, repository objects only can be created in systems, where the namespace is enabled by prefixing the namespace name /.../. If a package is created in this type of prefix namespace, it can only contain repository objects belonging to the same namespace. However, multiple packages can be created within a single prefix namespace. The available length for the actual name is reduced by the length of the [namespace prefix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"), including the slashes.
    
-   [Partner namespace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpartner_namespace_glosry.htm "Glossary Entry")
    
    If no prefix namespace is available, the names of repository objects created in partner systems should have a J as the first character. This means they are located in the partner namespace. For more information, see [SAP Note 38781](https://launchpad.support.sap.com/#/notes/38781).
    
-   [Customer namespace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomer_namespace_glosry.htm "Glossary Entry")
    
    If no prefix namespace is available, the names of repository objects created in customer systems or non-SAP development systems must have Y or Z as the first character. This means they are located in the customer namespace. Repository objects whose names start with Z can also be located within packages whose names start with Y and the other way round. For more information, see [SAP Note 16466](https://launchpad.support.sap.com/#/notes/16466).
    
-   [SAP namespace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_namespace_glosry.htm "Glossary Entry")
    
    If no prefix namespace is available, there are no real restrictions for the names of repository objects that are created in SAP's own development systems. The SAP namespace comprises the entire AS ABAP. Regardless of the namespace where a repository object resides, the name of the repository object is unique in the current AS ABAP. Therefore, when the object is addressed, nothing else needs to be specified. The namespaces (particularly the prefix namespace) were implemented to avoid namespace conflicts during transports between systems and upgrades. For SAP's own development systems, there is a cross-system table that ensures the uniqueness of names within the SAP namespace.
    

Hint

There is also a technical namespace for the global types, namely the global [object types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_type_glosry.htm "Glossary Entry") of the [class library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_library_glosry.htm "Glossary Entry") and the global [data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_glosry.htm "Glossary Entry") of [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry"). These must also be unique in order to be globally used for declaring reference variables.

Rule   

Clarify the type and affiliation of repository objects in names

Use common naming conventions for repository objects. The predefined name prefixes, CL\_, IF\_, and CX\_, apply to objects of the class library. If possible, create all repository objects in the prefix namespaces only. In addition, use a naming convention to clearly indicate which package or component the objects belong to.

Details   

Classes and interfaces are the most important entities for [programming with ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"). Either a class type or an interface type can be used to type a object reference. It is useful to uniquely flag these two types in the class library by means of a prefix. Global exception classes should also be uniquely identified by a prefix. The following naming conventions apply. These conventions are sometimes enforced by Class Builder but are sometimes only evaluated:

-   CL\_ for global classes
-   IF\_ for global interfaces
-   CX\_ for global exception classes
-   CL\_BADI\_, IF\_BADI\_, CX\_BADI\_ for classes, interfaces, and exception classes of Business Add-Ins (BAdI)

These naming conventions distinguish [object types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_type_glosry.htm "Glossary Entry") from the global [data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_glosry.htm "Glossary Entry") of [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"), with which they share a namespace.

In addition, the names of all repository objects should clearly identify the package or component they belong to. Technically speaking, a package does not generate its own namespace and therefore naming requires strict discipline. Using prefix namespaces is very helpful in itself. However, they are not intended for the package level but for bigger development projects, which usually comprise numerous packages.

Therefore, the names of the repository objects contained in a package should be labeled with a shared name component, which indicates the affiliation to a package or at least to an application component. The length of names is restricted to 30 characters or less, and the namespace prefix is included. Therefore, an abbreviation should be used for this name component and not the complete package name.

A global name should never be given for a package-specific or component-specific repository object. This would render the name useless for further general use. For example, general names of the SAP namespace (such as CHAR60 for a data element or CL\_ABAP\_MATH for a class) should only be declared in absolutely fundamental basis packages delivered by SAP and exposed by these packages in a generally available interface.

If developers find a repository object with a global name, they naturally assume that they can freely use the object in the way indicated by the name. Since the application of package boundaries is not checked thoroughly, repository objects with overly global names (particularly in the SAP namespace and also in the customer namespace) are now used throughout all AS ABAP packages. This can cause considerable difficulties when implementing real package encapsulation.

Note

The above rule supplements the global rule regarding [descriptive names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm "Guideline"). With regard to technical information in repository object names, the same information stated in section on descriptive names also applies here (also refer to the discussion on prefixes and suffixes in [program-internal names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprog_intern_names_guidl.htm "Guideline")).

All development organizations are free to create own naming conventions on the basis of the above rule regarding [descriptive names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm "Guideline"). However, note that the use of a namespace prefix only leaves limited space for the remaining name components. For example, the names of database tables are restricted to 16 characters. Therefore, the namespace prefix should not be too long. It should simply describe a product line using an abbreviation

Exception

Not all repository objects can be created in prefix namespaces. Some examples are authorization objects and type pools. In these cases, an additional package should be created that includes all of these objects. The object names and package names should, if possible, contain a relevant, normal prefix instead of the real namespace prefix /.../.

A similar guideline applies if further development is performed in areas that are traditionally located in the SAP namespace or the customer namespace. Instead of using a real namespace prefix, this can be simulated by using uniform prefixes when new packages and development objects are created.

If ABAP Workbench itself allocates [names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensource_code_orga_gdl.htm), for instance, for include programs, which are assigned to specific master programs (such as function pools or class pools), this name allocation always has priority over all other rules. This ensures that the workbench and the compiler run correctly.

Example

Refer to the repository objects of the example application in the package SABAP\_DEMOS\_CAR\_RENTAL.

The subpackages of the SABAP\_DEMOS\_CAR\_RENTAL package start with the same name as the superpackage (as [recommended](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm "Guideline") in these guidelines). A suffix indicates their specialization. The same applies to the package interfaces. Instead of a real namespace prefix, the repository objects of the packages have the DEMO\_ prefix. This indicates that the objects are part of a demo package. The affiliation with the car rental application is indicated by the abbreviation CR (car rental).


### abenprog_intern_names_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Program-Internal%20Names%2C%20ABENPROG_INTERN_NAMES_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Program-Internal Names

Background   

Program-internal names describe entities that are declared in the program and are called within the program or called by other programs. Typical examples include identifiers for data types and data objects as well as methods and method interface parameters.

Program-internal declarations can be configured in different contexts that all span a separate namespace. These contexts are arranged in the order from local to global:

1.  Local declarations in a procedure ([Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline"))
2.  Declarations of instance components and static components in a class
3.  Global declarations in the declaration part of a program

Here local declarations always hide the more global declarations of higher contexts. Different types of declarations each span a separate namespace in their context, except the class components, which are all located in one single namespace, regardless of their type.

The identifiers used in ABAP programs are must comply with the syntactic requirements for classes (in accordance with the rule [Use ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") and the rule [Applying Default Settings to Program Properties](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_property_guidl.htm "Guideline")). In other words, the identifiers must begin with a letter, which is followed other letters and numbers that can be separated by underscores.

Rule   

Prevent program-internal names from being confused or hidden

Choose program-internal names that cannot be confused with ABAP words or other declarations. In addition, a local name must not hide a more global name. Global entities and interface parameters of procedures should have a prefix for identification purposes.

Details   

Besides using the general rule of assigning [meaningful names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm "Guideline"), it is also important for program-internal declarations that you stick to the above rule of eliminating human error (avoiding name confusion). Unlike a human reader, the compiler usually knows exactly what an identifier is referring to. Use the following prefixes to avoid the danger of unwanted hiding and name confusion:

-   g\_ for global data objects
-   l\_ for local data objects that hide static attributes
-   i\_ for IMPORTING parameters
-   e\_ for EXPORTING parameters
-   c\_ for CHANGING parameters
-   r\_ for RETURNING parameters

Further measures are the use of compound identifiers and component selectors.

The following sections discuss the different aspects of program-internal names in detail and with a systematic approach.

Confusion with ABAP Words

A basic rule in almost all naming specifications is that language statements must not be used as names in the source code (assuming that this is allowed by the syntax). The aim of this measure is to improve readability by preventing confusion between statements and names. In ABAP, however, it is difficult to strictly adhere to this rule, because the vocabulary of the programming language is very extensive and is continuously growing. In most cases, developers will not have memorized all the ABAP words that occur in all the statements and statement additions. Also, they cannot possibly know which words will be added in future.

For this reason, it is not logical or feasible to completely prohibit the use of ABAP words (ABAP keywords or additions) as names. Thanks to the color highlighting in ABAP Editor and the different capitalization rules in operands and ABAP words ([Pretty Printer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuse_pretty_printer_guidl.htm "Guideline")), there is no risk of confusion. If in doubt, you can always use the (!) character directly in front of a name, to distinguish it from an ABAP word with the same name in a statement.

A single ABAP word, however, usually does not represent a descriptive name. Therefore, we recommend that you only use ABAP words as part of combined names with underscores (\_), for instance, account\_class instead of class. Because the underscore is not used in most ABAP words, it is usually a good idea to distinguish between ABAP words and [names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentelling_names_guidl.htm "Guideline"). In some very rare cases, the compiler cannot distinguish an ABAP word from a name that is identical to the word. In these cases, the escape character (!) must be specified.

Confusion Between Different Declarations

In classes, all components are in the same namespace. Therefore, it is not possible to have data types and attributes with the same name within a class to avoid confusion. In the other contexts, that is, within procedures ([Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), or for global declarations of an ABAP program, different declarations generate different namespaces. Here it is possible to have data objects and data types with the same name. Object types (local classes and interfaces) are in the same namespace as data types.

To avoid confusion, we recommend that you use different names for different entities, and that you do not use the same names for data types and data objects. Exceptions to this rule are cases where the meaning of a name is absolutely clear, for example, the declaration of a helper variable:

DATA i TYPE i.

However, it should never be the case that a data object has the name of a data type that is not the type of the object:

DATA i     TYPE f.
DATA tadir TYPE trdir.

This is both confusing and dangerous!

Obscuring of More Global Declarations

The names in local contexts hide declarations with the same name in contexts that are more global. In a method, for example, a data type declared with TYPES hides an identically named data type of the class. This data type then hides the identically named data type of the program, which in turn hides an identically named data type from ABAP Dictionary.

Developers must ensure that a more global object (that should be used in the current context) is not hidden. Conversely, a global object must not be accidentally used instead of a local object. The reader of the source code should always know what a name refers to. This means that, when names are given, local names should not hide any names that are more global.

Following the [KISS principle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkiss_principle_guidl.htm "Guideline"), it is recommended that local names are different from global names, because they do not follow their conventions. This mainly refers to the names in global declarations of the current program or in the repository. For example, a local class should never start with the cl\_ prefix, a local interface should never start with if\_ prefix, and a local data object should never start with the g\_ prefix.

-   Within methods
    
    In a method (in new function modules and subroutines, there should be [no local declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")), there is the danger that local names (including method parameters) can be confused with more global names. Declarations within the implementation can also be confused with method parameters. It should also be noted that methods in the same class always hide any built-in functions with the same name.
    
    To prevent local data objects in a method from being confused with components of their own class, you can explicitly address class components using the name of the class and the class component selector (=>), or using the object reference variable me and the instance component selector (->).
    
    If there is a danger that identically named built-in functions can be confused, the functional methods of the same class should be addressed only by using one of the selectors when using functional method calls. However, excessive use of selectors can make the source code difficult to read. Therefore, each case should be assessed separately. This danger of confusion is only relevant for short method names, however. For methods with names consisting of multiple words or names that start with the prefixes set\_, get\_, or is\_, there is usually no risk of confusion. Methods should always have a [manageable size](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenproc_volume_guidl.htm "Guideline"), and all declarations are therefore always visible for the reader. Therefore, this simple rule should be sufficient to make the method easy to read.
    
    If the declaration of the method's parameter interface is not visible in the method implementation (as in local classes), it is useful to make an additional distinction between local data and the method parameters. It has become customary to use the prefixes mentioned earlier to achieve this. An alternative prefix component l could also be considered here for local data, but it ultimately represents redundant information.
    
-   Within classes
    
    If you use class components, you can always avoid confusion by addressing the class components using the name of the class and the class component selector (\=>) or an object reference variable and the instance component selector (\->). The implementation of a corresponding naming convention would lead to redundant information, which would not improve readability and would be contradictory to the basic [KISS principle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkiss_principle_guidl.htm "Guideline"). This applies in particular to the methods of the class. Although these methods hide any identically named built-in functions, it would be very unusual to implement a prefix that indicates a method as a method of a class. Instead, methods should not be given the names of built-in functions.
    
-   In programs (general)
    
    In the global declaration part of a program, you can create local classes and interfaces, as well as global data types and data objects.
    
    -   The names of local classes and interfaces do not follow the naming conventions for global classes and interfaces. In other words, they cannot start with cl\_ or if\_, to ensure that no global declarations are hidden. With respect to local data, you can consider the naming convention lcl\_ or lif\_, but this would be redundant and not necessarily required, because a class o interface without a prefix is always known as a local class or local interface. The use of lif\_ may be useful for distinguishing a local interface from a local class.
    -   Data types should no longer occur in the [global declaration part](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_variables_guidl.htm "Guideline") of a program. Global data objects are only required for communication between ABAP and dynpro if [classic dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenencap_class_interf_guidl.htm "Guideline") are used. Since these objects cannot names cannot be prefixed with a program name, as with class attributes (absolute names are only possible for data types and only in dynamic specifications), you must use the g\_ prefix for global data objects, to prevent confusion with local data objects or class attributes in method implementations. Global data objects can only exist in executable programs, module pools, and function pools. Global classes and interfaces cannot contain any global data objects. Therefore, a g\_ prefix for class components or interface components is definitely the wrong choice.

Note

Naming conventions are frequently established for names within the source code that define specifications for naming, including potential prefixes and suffixes. These specifications often get bogged down in excessive formal strictness. Names created this way contain redundant information, are difficult to maintain and often do not achieve the main aim of readability and self-documenting sources. Therefore, we limited our discussion to the naming-related aspects that we consider essential and universal. Further specifications are only useful at the level of development groups/organizations.

If prefixes and/or suffixes are used, it is common practice to store the technical properties of the described object in these prefixes/suffixes. Apart from the fact that we do not consider it necessary to specify technical information in names, there are so many technical properties of an object in ABAP that they cannot be mapped using simple rules for short prefixes/suffixes. Or combinations of different technical additions often cannot be interpreted uniquely. Some examples:

-   With respect to the data type of a data object, there are naming conventions where v and c as prefixes stand for variable or constant elementary data objects. Similarly, s and t as prefixes stand for structures and internal tables. The type property elementary is wrongly equated with variable or constant. If the properties static variable and sorted table are also supposed to be expressed using s, this is very likely to cause mistakes with name assignments. This makes it much harder to achieve the goal of readable, self-documenting source codes.
-   With respect to the validity area or the context of a data object, the naming conventions often stipulate the prefixes g\_ and l\_ for the names of global and local data objects. We identified g\_ for global data objects as the only convention that is actually required for program-internal names. However, the simultaneous labeling of all non-global objects with the prefix l\_ for the local validity area is almost never necessary. l\_ should only be used if a local name is to be the same as a more global name and the corresponding lack of hiding component selectors would produce unreadable source code. The latter case only occurs for long class names in front of \=>. If me-> is used in front of the names of instance attributes, the method does not become any less unreadable than when an l\_ is placed in front of the name of a local data object.
    
    It would actually be completely misleading to label static attributes of classes as global, using the prefix g\_. These attributes are only valid within the class and have completely different semantics than global data objects. The use of these attributes does not indicate a design weakness as it is generally the case for global data objects today.
    
-   With respect to the method parameters, we identified the prefixes i\_, e\_, c\_, and r\_ for importing, exporting, changing, and returning parameters as possible characteristics for distinguishing from data objects declared in the method. Apart from this, no further technical information needs to be expressed with additional prefixes. With method parameters in particular, technical information in prefixes tends to cause confusion rather than improve readability. For example, a prefix is\_ for importing structure would conflict with the prefix is\_ for truth values, and a prefix it\_ for importing table could easily be understood as a general abbreviation of internal table. If the role the parameter plays cannot be known from the descriptive name of a parameter and the procedure name, the names assigned are completely wrong and/or the procedure does not fulfill any clearly defined tasks. This type of conceptual weakness cannot be fixed (even with technical prefixes).

In summary, we recommend that you should use name additions cautiously, particularly additions with technical information. Of course, every organization is free to use these conventions, which can supplement our basic rules. In ABAP - with its high versatility of types, many contexts, the distinction between pass by reference and pass by value - it is probably not an easy task to create a complete, self-contained, consistent, technically correct, and - above all - easy-to-understand set of rules for prefixes and suffixes. The known results are just pure conventions that are usually incomplete and are not always applicable.

Bad Example

The example shown below demonstrates how to hide names in different contexts. The fact that no descriptive names were used for the data objects (for the sake of simplicity) can be disregarded here.

DATA a1 TYPE string VALUE \`a1 global\`.
DATA a2 TYPE string VALUE \`a2 global\`.
DATA a3 TYPE string VALUE \`a3 global\`.
DATA a4 TYPE string VALUE \`a4 global\`.
DATA a5 TYPE string VALUE \`a5 global\`.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS main
      IMPORTING a1 TYPE string DEFAULT 'a1 imported'
      RETURNING value(a6) TYPE string.
    CLASS-DATA a1  TYPE string VALUE \`a1 class\`.
    CLASS-DATA a2  TYPE string VALUE \`a2 class\`.
    DATA a3        TYPE string VALUE \`a3 class\`.
    DATA a4        TYPE string VALUE \`a4 class\`.
ENDCLASS.

CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA a3 TYPE string VALUE \`a3 local\`.
    DATA a4 TYPE string VALUE \`a4 local\`.
    CONCATENATE a1 demo=>a2 me->a3 a4 a5
      INTO a6 SEPARATED BY \`, \`.
  ENDMETHOD.
ENDCLASS.

If you just consider the implementation of the main method in the CONCATENATE statement, it is clearly evident only for the demo=>a2 and me->a3 operands that they are attributes of the class and that a4 is a local data object of the method. It is only possible in the general overview to see that a1 describes an importing parameter, a5 describes a global data object of the program, and a6 describes a returning parameter. The global data objects a1 to a4 cannot be addressed in the method because they are hidden by local data objects or attributes of the class.

Good Example

Unlike the source code above, the following source code includes the previously discussed prefixes, to prevent hiding and to distinguish method parameters from local data objects. Again, descriptive names were not used here to focus on aspects that are essential for this example.

DATA g\_a1 TYPE string VALUE \`g\_a1 global\`.
DATA g\_a2 TYPE string VALUE \`g\_a2 global\`.
DATA g\_a3 TYPE string VALUE \`g\_a3 global\`.
DATA g\_a4 TYPE string VALUE \`g\_a4 global\`.
DATA g\_a5 TYPE string VALUE \`g\_a5 global\`.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS main
      IMPORTING i\_a1 TYPE string DEFAULT 'i\_a1 imported'
      RETURNING value(r\_a6) TYPE string.
    CLASS-DATA a1  TYPE string VALUE \`a1 class\`.
    CLASS-DATA a2  TYPE string VALUE \`a2 class\`.
    DATA a3        TYPE string VALUE \`a3 class\`.
    DATA a4        TYPE string VALUE \`a4 class\`.
ENDCLASS.

CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA a3 TYPE string VALUE \`a3 local\`.
    DATA a4 TYPE string VALUE \`a4 local\`.
    CONCATENATE i\_a1 demo=>a2 me->a3 a4 g\_a5
     INTO r\_a6 SEPARATED BY \`, \`.
  ENDMETHOD.
ENDCLASS.

All operands are now clearly known in the CONCATENATE statement. A prefix (l\_) can be implemented for the local names, but this is unnecessary for two reasons:

-   The declaration is defined near the place of usage and is always visible to the reader.
-   If you consistently use the selectors \-> and \=> to address the attributes of a class, all names without a prefix and with no specified class or a reference variable are known as local data objects.

By applying the minimal naming convention used here, you can address all data objects that are declared in the above source code section in the method. Of course, the declaration of the global data objects is only implemented to demonstrate hiding and how to prevent it. Global data objects should [no longer be used](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_variables_guidl.htm "Guideline") in programs that do not work with classic dynpros.


### abenstruc_comp_names_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_style_gdl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Names%20of%20Structure%20Components%2C%20ABENSTRUC_COMP_NAMES_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Names of Structure Components

Background   

When ABAP programs are executed, the names of data objects usually only have the task of identifying the data objects uniquely. The ABAP statements operate directly with the objects in question without attaching any special meaning to their names. The names of structure components are an exception here. They are evaluated in the following cases:

-   When structure components are assigned using
    -   the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove-corresponding.htm)
    -   the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_corresponding.htm)
    -   the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corresponding.htm)
-   In ABAP SQL, in the addition [CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm)
-   In [obsolete calculation statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomputing_obsolete.htm) like [ADD-CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapadd-corresponding.htm)

In these language constructs, the names of the components of the structures in question are compared and the operation is executed using the identically named components (if not overridden by a mapping rule).

Rule   

Give structure components with the same meaning the same names

Give the components of structures that have the same meaning within a data model the same names

Details   

This rule mainly applies to data models defined in ABAP Dictionary (including ABAP CDS). If one of the CORRESPONDING constructs above is used in an ABAP program to access structures or structured internal tables (and the structured types of these structures or tables are defined like database tables or CDS entities using types from the data model in ABAP Dictionary), it is essential that components from different structures but with the same semantics have the same name.

Bad Example

The database tables DOKIL DOKHL, and DOKTL are in the same package and the same application. The column whose type is determined by the data element DOKVERS has the same name (DOKVERSION) in DOKHL and DOKTL, but the name in DOKIL is VERSION.

Good Example

Columns of the familiar structures used in the flight data model in training and documentation that have the same semantics usually also have the same names.
